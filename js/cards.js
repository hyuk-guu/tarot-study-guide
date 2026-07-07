function renderKnowledgeMap() {
  byId("knowledge-grid").innerHTML = Object.values(tarotSystem).map((group) => `
    <article class="map-card">
      <button type="button" aria-expanded="false" class="map-card-toggle">
        <p class="panel-label">${escapeHtml(group.titleEn)}</p>
        <h3>${escapeHtml(group.titleZh)}</h3>
        <p>点击展开学习节点 ✧</p>
      </button>
      <div class="expand-content">
        <div class="system-item-grid">
          ${Object.entries(group.items).map(([key, entry]) => `
            <button class="system-item-button" type="button" data-system-key="${escapeHtml(key)}">
              <span>${escapeHtml(key)}</span>
              ${entry.en ? `<small>${escapeHtml(entry.en)}</small>` : ""}
            </button>
          `).join("")}
        </div>
      </div>
    </article>
  `).join("");

  document.querySelectorAll(".map-card-toggle").forEach((button) => {
    button.addEventListener("click", () => {
      const card = button.closest(".map-card");
      const isOpen = card.classList.toggle("open");
      button.setAttribute("aria-expanded", String(isOpen));
    });
  });
  bindSystemInteractions(byId("knowledge-grid"));
  showSystemDetail("水元素");
}

function cardMatchesFilter(card) {
  if (activeFilter === "All") return true;
  if (activeFilter === "Major") return card.arcana === "Major";
  if (activeFilter === "Minor") return card.arcana === "Minor";
  if (["Wands", "Cups", "Swords", "Pentacles"].includes(activeFilter)) return card.suit.includes(activeFilter);
  const elementFilters = { Fire: "火 Fire", Water: "水 Water", Air: "风 Air", Earth: "土 Earth" };
  return card.element === elementFilters[activeFilter];
}

function cardMatchesSearch(card, search) {
  if (!search) return true;
  const haystack = [
    card.id,
    card.name,
    card.zhName,
    card.nameEn,
    card.arcana,
    card.arcanaZh,
    card.suit,
    card.suitZh,
    card.element,
    card.elementZh,
    card.number,
    ...card.keywords,
    ...(card.keywordsZh || []),
    ...(card.keywordsEn || []),
    card.upright,
    card.reversed
  ].join(" ").toLowerCase();
  return haystack.includes(search);
}

function renderCards() {
  const search = byId("card-search").value.trim().toLowerCase();
  const cards = tarotCards.filter((card) => cardMatchesFilter(card) && cardMatchesSearch(card, search));

  byId("cards-grid").innerHTML = cards.length ? cards.map((card) => `
    <article class="tarot-card">
      ${renderCardImage(card, "thumb")}
      <div class="tarot-card-top">
        <div>
          <p class="panel-label">${displayCardGroup(card.arcana)} · ${card.suit}</p>
          ${renderBilingualCardName(card)}
        </div>
        <button class="favorite-btn ${favorites.has(card.name) ? "active" : ""}" type="button" data-favorite="${card.name}" aria-label="收藏或取消收藏 ${card.name}">
          ★
        </button>
      </div>
      <p class="keyword-line">${card.keywords.join(", ")}</p>
      <p class="tarot-basic-tags">${getCardSystemLine(card).split(" · ").map(escapeHtml).join(" · ")}</p>
      <p class="tarot-meta">${card.imageReading?.[0] || card.upright}</p>
      <div class="tarot-card-actions">
        <button class="secondary-btn" type="button" data-open-card="${card.name}">详情</button>
      </div>
    </article>
  `).join("") : `<p class="detail-panel">暂时没有符合条件的牌。</p>`;
  hydrateCardImages(byId("cards-grid"));

  document.querySelectorAll("[data-favorite]").forEach((button) => {
    button.addEventListener("click", () => toggleFavorite(button.dataset.favorite));
  });

  document.querySelectorAll("[data-open-card]").forEach((button) => {
    button.addEventListener("click", () => openCardModal(button.dataset.openCard));
  });
}

function toggleFavorite(name) {
  if (favorites.has(name)) {
    favorites.delete(name);
  } else {
    favorites.add(name);
  }
  saveFavorites();
  renderCards();
}

function textOrPending(value) {
  const text = String(value || "").trim();
  return text || "待补充";
}

function splitLearningSections(text, labels) {
  const source = textOrPending(text);
  if (source === "待补充") return labels.map((label) => ({ label: label.title, text: "待补充" }));

  const matches = [];
  labels.forEach((label) => {
    const names = [label.title, ...(label.aliases || [])];
    let best = null;
    names.forEach((name) => {
      const index = source.indexOf(`${name}：`);
      const asciiIndex = source.indexOf(`${name}:`);
      const found = index >= 0 ? index : asciiIndex;
      if (found >= 0) {
        const candidate = { label: label.title, start: found, markerLength: name.length + 1 };
        if (!best || candidate.start < best.start || (candidate.start === best.start && candidate.markerLength > best.markerLength)) {
          best = candidate;
        }
      }
    });
    if (best) matches.push(best);
  });

  if (!matches.length) {
    return labels.map((label, index) => ({ label: label.title, text: index === 0 ? source : "待补充" }));
  }

  matches.sort((a, b) => a.start - b.start);
  return labels.map((label) => {
    const match = matches.find((item) => item.label === label.title);
    if (!match) return { label: label.title, text: "待补充" };
    const next = matches.find((item) => item.start > match.start);
    return {
      label: label.title,
      text: textOrPending(source.slice(match.start + match.markerLength, next ? next.start : source.length).trim())
    };
  });
}

function renderLearningSectionList(sections) {
  return sections.map((section) => `
    <div class="learning-section-item">
      <strong>${escapeHtml(section.label)}</strong>
      <p>${escapeHtml(section.text)}</p>
    </div>
  `).join("");
}

function getUprightSections(card) {
  return splitLearningSections(card.uprightScenes || card.upright, [
    { title: "感情" },
    { title: "工作" },
    { title: "学习", aliases: ["学习 / 自我成长"] },
    { title: "建议", aliases: ["当前建议"] }
  ]);
}

function getReversedSections(card) {
  const text = textOrPending(card.reversedLogic || card.reversed);
  if (text === "待补充") {
    return ["阻塞", "内化", "延迟", "过度", "失衡"].map((label) => ({ label, text: "待补充" }));
  }
  return [
    { label: "阻塞", text },
    { label: "内化", text: `这张牌的能量可能转向内在，表现为不愿表达、难以承认，或只能在心里反复处理。` },
    { label: "延迟", text: `相关主题可能尚未成熟，需要更多时间、信息或现实条件支持。` },
    { label: "过度", text: `牌义中的核心能量可能被使用过头，变成压力、执着或单一反应。` },
    { label: "失衡", text: `重点是观察哪里失去比例，而不是简单把逆位读成坏结果。` }
  ];
}

function getSpreadSections(card) {
  return splitLearningSections(card.spreadReadingZh, [
    { title: "当前情况" },
    { title: "阻碍" },
    { title: "建议" },
    { title: "结果" }
  ]);
}

function openCardModal(name) {
  const card = getCardByName(name);
  if (!card) {
    byId("modal-subtitle").textContent = "内容待补充";
    byId("modal-title").innerHTML = `<span class="card-name-zh">${escapeHtml(name || "未知牌")}</span>`;
    byId("modal-keywords").innerHTML = `<span class="plain-tag">待补充</span>`;
    byId("modal-system-path").innerHTML = `<strong>系统路径</strong><span class="system-path-zh">内容待补充</span>`;
    byId("modal-learning-status").innerHTML = "";
    byId("modal-card-quiz").innerHTML = "";
    byId("modal-image").innerHTML = renderCardImage({ name, image: "", imageAlt: `${name} 牌图待补` }, "large");
    byId("modal-overview").innerHTML = `<h3>核心主题</h3><p>待补充</p>`;
    byId("modal-visual-reading").innerHTML = `<li>内容待补充。</li>`;
    byId("modal-color-reading").textContent = "待补充";
    byId("modal-upright").innerHTML = renderLearningSectionList(getUprightSections({ upright: "" }));
    byId("modal-reversed").innerHTML = renderLearningSectionList(getReversedSections({ reversed: "" }));
    byId("modal-spread-reading").innerHTML = renderLearningSectionList(getSpreadSections({ spreadReadingZh: "" }));
    byId("modal-study-questions").innerHTML = `<li>待补充</li>`;
    byId("modal-related").innerHTML = `<h3>相关牌</h3><p>内容待补充。</p>`;
    byId("card-modal").classList.add("open");
    byId("card-modal").setAttribute("aria-hidden", "false");
    hydrateCardImages(byId("card-modal"));
    return;
  }

  markCardVisited(card.id);
  byId("modal-subtitle").textContent = `${displayCardGroup(card.arcana)} · ${card.suit}`;
  byId("modal-title").innerHTML = `
    <span class="card-name-zh">${escapeHtml(card.zhName || card.name)}</span>
    ${card.nameEn ? `<span class="card-name-en">${escapeHtml(card.nameEn)}</span>` : ""}
  `;
  byId("modal-keywords").innerHTML = card.keywords.map((keyword) => `<span class="plain-tag">${escapeHtml(keyword)}</span>`).join("");
  byId("modal-system-path").innerHTML = `
    <strong>系统路径</strong>
    <span class="system-path-zh">${escapeHtml(card.systemPathZh)}</span>
    <small class="system-path-en">${escapeHtml(card.systemPathEn)}</small>
    <div class="tag-row">${(card.systemTags || []).map(renderSystemTag).join("")}</div>
  `;
  refreshCardLearningStatus(card);
  byId("modal-card-quiz").innerHTML = "";
  byId("modal-image").innerHTML = renderCardImage(card, "large");
  byId("modal-overview").innerHTML = `
    <h3>核心主题</h3>
    <p>${escapeHtml(textOrPending(card.coreThemeZh))}</p>
    <div class="learning-mini-grid">
      <div><strong>元素连接</strong><p>${escapeHtml(textOrPending(card.elementConnectionZh))}</p></div>
      <div><strong>数字 / 宫廷连接</strong><p>${escapeHtml(textOrPending(card.numberConnectionZh))}</p></div>
      <div><strong>花色连接</strong><p>${escapeHtml(textOrPending(card.suitConnectionZh))}</p></div>
    </div>
  `;
  byId("modal-visual-reading").innerHTML = renderVisualReadingList(card);
  byId("modal-color-reading").textContent = textOrPending(card.colorReadingZh);
  byId("modal-upright").innerHTML = renderLearningSectionList(getUprightSections(card));
  byId("modal-reversed").innerHTML = renderLearningSectionList(getReversedSections(card));
  byId("modal-spread-reading").innerHTML = renderLearningSectionList(getSpreadSections(card));
  byId("modal-study-questions").innerHTML = (card.studyQuestions || ["待补充"]).map((question) => `<li>${escapeHtml(question)}</li>`).join("");
  byId("modal-related").innerHTML = `
    <h3>相关牌</h3>
    <div class="related-card-grid">${(card.relatedCards || []).map(renderRelatedCardButton).join("") || "<p>可继续从相同元素、花色或图像符号扩展。</p>"}</div>
  `;
  bindSystemInteractions(byId("card-modal"));
  byId("card-modal").classList.add("open");
  byId("card-modal").setAttribute("aria-hidden", "false");
  hydrateCardImages(byId("card-modal"));
}

function closeCardModal() {
  byId("card-modal").classList.remove("open");
  byId("card-modal").setAttribute("aria-hidden", "true");
  updateStudyProgress();
}

function renderElements() {
  byId("elements-grid").innerHTML = elements.map((element, index) => `
    <button class="element-card" type="button" data-element-index="${index}">
      <span class="element-symbol">${element.symbol}</span>
      <h3>${element.name} / ${element.suit}</h3>
      <p>${element.words}</p>
    </button>
  `).join("");

  document.querySelectorAll("[data-element-index]").forEach((button) => {
    button.addEventListener("click", () => showElementDetail(Number(button.dataset.elementIndex)));
  });
  showElementDetail(0);
}

function showElementDetail(index) {
  const element = elements[index];
  const entry = findSystemEntry(element.name.split(" ")[0] + "元素");
  byId("element-detail").innerHTML = `
    <p class="panel-label">${element.name} · ${element.suit}</p>
    <h3>${element.words}</h3>
    <p>${element.detail}</p>
    ${entry ? `<div class="inline-system-detail">${renderSystemEntryDetail(entry)}</div>` : ""}
  `;
  bindSystemInteractions(byId("element-detail"));
}

function renderNumbers() {
  byId("number-buttons").innerHTML = numberMeanings.map(([number]) => `
    <button class="number-btn" type="button" data-number="${number}">${number}</button>
  `).join("");

  document.querySelectorAll("[data-number]").forEach((button) => {
    button.addEventListener("click", () => showNumberDetail(button.dataset.number));
  });
  showNumberDetail("1");
}

const numberStudyDetails = {
  "1": {
    theme: "开始 / 种子 / 潜能",
    summary: "数字 1 是一股刚出现的能量，还没有稳定形状，但已经带来方向、机会或冲动。",
    suits: {
      权杖: "新的行动火花、灵感、想开始做某件事。",
      圣杯: "新的情绪流动、心动、直觉或关系可能。",
      宝剑: "新的想法、判断、真相意识或沟通开端。",
      星币: "新的资源、现实机会、身体或金钱层面的种子。"
    },
    tip: "读 1 时先问：这股能量刚从哪里出现？它需要被接住，还是需要先观察？",
    confusion: "不要把 1 直接读成完成。它更像机会的入口，而不是已经成形的结果。",
    related: "四张 Ace、愚人、魔术师",
    question: "我现在真正想开始的是什么？"
  },
  "2": {
    theme: "选择 / 平衡 / 伙伴关系",
    summary: "数字 2 把一个能量带进关系、对照和选择中，重点是两方之间是否能回应。",
    suits: {
      权杖: "两个方向、未来规划、是否走出舒适区。",
      圣杯: "情感回应、互相承认、关系开始建立。",
      宝剑: "左右为难、暂时不表态、需要清楚判断。",
      星币: "现实事务的协调、时间和资源的平衡。"
    },
    tip: "读 2 时观察双方是否平等：是合作、拉扯，还是拖延选择？",
    confusion: "2 不一定代表稳定关系，也可能代表犹豫、摇摆或刚出现的对照。",
    related: "圣杯二、宝剑二、星币二、恋人",
    question: "这件事里有哪些两难或需要回应的关系？"
  },
  "3": {
    theme: "成长 / 合作 / 表达",
    summary: "数字 3 让能量开始外显，进入表达、扩展、合作或结果初步成形的阶段。",
    suits: {
      权杖: "远方计划、扩展视野、等待行动后的回响。",
      圣杯: "庆祝、友情、情感支持和共同喜悦。",
      宝剑: "痛感被说出，事实或语言刺破情绪防线。",
      星币: "合作工作、技能被看见、共同搭建成果。"
    },
    tip: "读 3 时看能量如何被表达出来：是创造、合作，还是伤口显现？",
    confusion: "3 的成长不总是快乐的，也可能是问题终于显形。",
    related: "圣杯三、宝剑三、星币三、权杖三",
    question: "现在有什么东西已经不再只是想法，而开始显现？"
  },
  "4": {
    theme: "结构 / 稳定 / 限制",
    summary: "数字 4 带来框架、安全感和边界，也可能带来僵硬、保守或停滞。",
    suits: {
      权杖: "庆祝稳定、家庭或阶段性安顿。",
      圣杯: "情绪停滞、无聊、对机会缺少回应。",
      宝剑: "休息、暂停、让头脑恢复秩序。",
      星币: "守住资源、安全感、控制和占有。"
    },
    tip: "读 4 时问：这个结构是在保护我，还是限制我？",
    confusion: "稳定不等于停滞；限制也不一定坏，关键是它是否仍然有用。",
    related: "星币四、权杖四、宝剑四、皇帝",
    question: "我现在需要更多安全感，还是需要松动旧框架？"
  },
  "5": {
    theme: "冲突 / 改变 / 不稳定",
    summary: "数字 5 是稳定结构被打扰后的阶段，带来摩擦、损失、竞争或价值冲突。",
    suits: {
      权杖: "意见碰撞、竞争、行动能量分散。",
      圣杯: "失落、后悔、注意力停在已经失去的部分。",
      宝剑: "冲突后的代价、输赢之外的关系损伤。",
      星币: "匮乏感、现实困难、需要寻求支持。"
    },
    tip: "读 5 时不要只看混乱，也要看它正在逼迫什么改变。",
    confusion: "5 不是结局，而是过渡期。它常常暴露旧方式已经不够用。",
    related: "圣杯五、宝剑五、星币五、塔",
    question: "这个冲突想让我调整什么？"
  },
  "6": {
    theme: "和谐 / 调整 / 疗愈",
    summary: "数字 6 进入修复和平衡阶段，试图让关系、资源或内在状态重新顺畅。",
    suits: {
      权杖: "被认可、阶段性胜利、行动获得回应。",
      圣杯: "回忆、纯真、旧关系或情感修复。",
      宝剑: "离开混乱、过渡到更平静的地方。",
      星币: "给予与接受、资源分配、现实互助。"
    },
    tip: "读 6 时看能量如何恢复：被支持、被承认，还是正在过渡？",
    confusion: "6 的和谐不是永久完美，而是从失衡中找到下一步调整。",
    related: "圣杯六、宝剑六、星币六、恋人",
    question: "哪里需要重新分配、修复或温柔过渡？"
  },
  "7": {
    theme: "挑战 / 信念 / 策略",
    summary: "数字 7 常常带来考验，需要信念、策略、耐心或重新辨认真相。",
    suits: {
      权杖: "守住立场、面对挑战和压力。",
      圣杯: "选择太多、幻想、欲望和投射。",
      宝剑: "策略、隐瞒、绕路或不完全诚实。",
      星币: "等待成果、评估投入和长期价值。"
    },
    tip: "读 7 时问：我是在坚持、幻想、策略，还是等待？",
    confusion: "7 不是单纯失败，它更像信念和方法被测试。",
    related: "圣杯七、宝剑七、星币七、战车",
    question: "我需要更坚定，还是需要更诚实地评估？"
  },
  "8": {
    theme: "移动 / 力量 / 掌握",
    summary: "数字 8 让能量进入推进、重复练习、限制突破或力量整合。",
    suits: {
      权杖: "快速推进、消息、行动加速。",
      圣杯: "离开不再滋养的情绪场域。",
      宝剑: "心理限制、被想法困住、需要看见出口。",
      星币: "练习、技能、稳定投入和打磨。"
    },
    tip: "读 8 时看：能量是在前进、离开、受限，还是通过练习成熟？",
    confusion: "8 的力量不一定外放，也可能表现为持续劳动或突破内在限制。",
    related: "宝剑八、星币八、权杖八、力量",
    question: "我现在需要推进、离开、练习，还是解开限制？"
  },
  "9": {
    theme: "成熟 / 独处 / 接近完成",
    summary: "数字 9 接近一个周期的成熟点，带来积累、独处、愿望实现或心理压力。",
    suits: {
      权杖: "疲惫但仍防守，经验让人谨慎。",
      圣杯: "愿望满足、情绪上的自足和享受。",
      宝剑: "焦虑、失眠、反复思考带来的压力。",
      星币: "独立、丰盛、长期经营后的自我价值。"
    },
    tip: "读 9 时观察：这是成熟的独处，还是快到终点前的压力？",
    confusion: "9 不是最终完成，它常常还有最后一段整理或面对。",
    related: "圣杯九、宝剑九、星币九、隐士",
    question: "我已经积累了什么？还有什么需要独自面对？"
  },
  "10": {
    theme: "完成 / 负担 / 周期结束",
    summary: "数字 10 是一个周期的终点，也暗示旧能量需要释放，进入下一轮。",
    suits: {
      权杖: "责任过重、负担累积，需要分担或收尾。",
      圣杯: "情感圆满、家庭愿景、共同幸福图景。",
      宝剑: "痛苦见底、某种叙事或阶段结束。",
      星币: "长期成果、家族资源、稳定结构和传承。"
    },
    tip: "读 10 时问：这是圆满完成，还是旧周期已经太重？",
    confusion: "10 不只是成功，也可能是负担到顶点，提醒你进入新循环。",
    related: "圣杯十、权杖十、宝剑十、世界",
    question: "这个周期该如何收尾，才能进入下一阶段？"
  }
};

function showNumberDetail(number) {
  document.querySelectorAll(".number-btn").forEach((button) => {
    button.classList.toggle("active", button.dataset.number === number);
  });

  const meaning = numberMeanings.find(([value]) => value === number)[1];
  const detail = numberStudyDetails[number] || {
    theme: meaning,
    summary: "这个数字展示小阿尔卡那中能量发展的一个阶段。",
    suits: {
      权杖: "行动与创造层面的表现。",
      圣杯: "情绪与关系层面的表现。",
      宝剑: "思维与沟通层面的表现。",
      星币: "现实与资源层面的表现。"
    },
    tip: "把数字含义和花色元素放在一起读。",
    confusion: "不要脱离牌面图像和问题背景单独读数字。",
    related: "同数字的四张小牌",
    question: "这个数字在当前问题里如何显现？"
  };
  const entry = findSystemEntry(number === "1" ? "Ace / 1" : `数字 ${number}`);
  byId("number-detail").innerHTML = `
    <p class="panel-label">数字 ${number}</p>
    <h3>${escapeHtml(detail.theme || meaning)}</h3>
    <p>${escapeHtml(detail.summary)}</p>
    <div class="suit-list number-suit-list">
      <div><strong>权杖 Wands</strong><p>${escapeHtml(detail.suits.权杖)}</p></div>
      <div><strong>圣杯 Cups</strong><p>${escapeHtml(detail.suits.圣杯)}</p></div>
      <div><strong>宝剑 Swords</strong><p>${escapeHtml(detail.suits.宝剑)}</p></div>
      <div><strong>星币 Pentacles</strong><p>${escapeHtml(detail.suits.星币)}</p></div>
    </div>
    <div class="number-study-grid">
      <section><strong>学习提示</strong><p>${escapeHtml(detail.tip)}</p></section>
      <section><strong>容易混淆</strong><p>${escapeHtml(detail.confusion)}</p></section>
      <section><strong>相关牌</strong><p>${escapeHtml(detail.related)}</p></section>
      <section><strong>练习问题</strong><p>${escapeHtml(detail.question)}</p></section>
    </div>
    ${entry ? `<div class="inline-system-detail">${renderSystemEntryDetail(entry)}</div>` : ""}
  `;
  bindSystemInteractions(byId("number-detail"));
}

function renderSpreads() {
  byId("spreads-grid").innerHTML = spreads.map((spread, index) => `
    <article class="spread-card">
      <button type="button" data-toggle-spread="${index}" aria-expanded="false">
        <p class="panel-label">${spread.positions.length} 张牌</p>
        <h3>${spread.name}</h3>
        <p>${spread.question}</p>
      </button>
      <div class="expand-content">
        <div>
          <ol>${spread.positions.map((position) => `<li>${position}</li>`).join("")}</ol>
        </div>
      </div>
      <button class="primary-btn" type="button" data-try-spread="${index}">试试这个牌阵</button>
    </article>
  `).join("");

  document.querySelectorAll("[data-toggle-spread]").forEach((button) => {
    button.addEventListener("click", () => {
      const card = button.closest(".spread-card");
      const isOpen = card.classList.toggle("open");
      button.setAttribute("aria-expanded", String(isOpen));
    });
  });

  document.querySelectorAll("[data-try-spread]").forEach((button) => {
    button.addEventListener("click", () => createSpread(Number(button.dataset.trySpread)));
  });
}

function createSpread(index) {
  activeSpread = spreads[index];
  byId("active-spread-title").textContent = activeSpread.name;
  byId("random-fill-btn").disabled = false;
  byId("spread-slots").innerHTML = activeSpread.positions.map((position, slotIndex) => `
    <div class="spread-slot" data-slot="${slotIndex}">
      <strong>${position}</strong>
      <span>空白牌位</span>
    </div>
  `).join("");
}

function randomFillSpread() {
  if (!activeSpread) return;
  document.querySelectorAll(".spread-slot").forEach((slot) => {
    const card = randomItem(tarotCards);
    slot.querySelector("span").textContent = card.name;
  });
}

function renderColors() {
  byId("color-grid").innerHTML = colors.map(([name, value, meaning], index) => `
    <button class="color-swatch" type="button" data-color-index="${index}">
      <span class="color-dot" style="background: ${value}"></span>
      <strong>${name}</strong>
    </button>
  `).join("");

  document.querySelectorAll("[data-color-index]").forEach((button) => {
    button.addEventListener("click", () => showColorDetail(Number(button.dataset.colorIndex)));
  });
  showColorDetail(0);
}

function showColorDetail(index) {
  const [name, value, meaning] = colors[index];
  const entry = findSystemEntry(name === "黄色" || name === "金色" ? "黄色 / 金色" : name);
  byId("color-detail").innerHTML = `
    <p class="panel-label">已选择颜色</p>
    <h3><span class="color-dot" style="display:inline-block;width:24px;height:24px;margin:0 10px -5px 0;background:${value}"></span>${name}</h3>
    <p>${meaning}</p>
    ${entry ? `<div class="inline-system-detail">${renderSystemEntryDetail(entry)}</div>` : ""}
  `;
  bindSystemInteractions(byId("color-detail"));
}

function renderQuiz() {
  quizAnswered = false;
  const content = byId("quiz-content");

  if (quizIndex >= quizQuestions.length) {
    content.innerHTML = `
      <p class="panel-label">已完成</p>
      <h3>你的得分：${quizScore} / ${quizQuestions.length}</h3>
      <p>${quizScore === quizQuestions.length ? "很好，你的元素基础很扎实。" : "可以回到知识地图复习一下，然后再试一次。"}</p>
    `;
    byId("quiz-feedback").textContent = "";
    return;
  }

  const current = quizQuestions[quizIndex];
  content.innerHTML = `
    <p class="panel-label">第 ${quizIndex + 1} 题 / 共 ${quizQuestions.length} 题</p>
    <h3>${current.question}</h3>
    <div class="quiz-options">
      ${current.options.map((option) => `<button class="quiz-option" type="button" data-answer="${option}">${option}</button>`).join("")}
    </div>
  `;
  byId("quiz-feedback").textContent = "";

  document.querySelectorAll("[data-answer]").forEach((button) => {
    button.addEventListener("click", () => answerQuiz(button));
  });
}

function answerQuiz(button) {
  if (quizAnswered) return;
  quizAnswered = true;
  const current = quizQuestions[quizIndex];
  const isCorrect = button.dataset.answer === current.answer;
  if (isCorrect) quizScore += 1;

  document.querySelectorAll("[data-answer]").forEach((optionButton) => {
    optionButton.disabled = true;
    if (optionButton.dataset.answer === current.answer) optionButton.classList.add("correct");
  });
  if (!isCorrect) button.classList.add("wrong");

  byId("quiz-feedback").textContent = isCorrect ? "答对了。" : `还差一点。正确答案：${current.answer}。`;
  window.setTimeout(() => {
    quizIndex += 1;
    renderQuiz();
  }, 900);
}

function restartQuiz() {
  quizIndex = 0;
  quizScore = 0;
  quizQuestions = generateQuizQuestions();
  renderQuiz();
}
