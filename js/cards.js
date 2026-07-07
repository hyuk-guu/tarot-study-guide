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

function showNumberDetail(number) {
  document.querySelectorAll(".number-btn").forEach((button) => {
    button.classList.toggle("active", button.dataset.number === number);
  });

  const meaning = numberMeanings.find(([value]) => value === number)[1];
  const entry = findSystemEntry(number === "1" ? "Ace / 1" : `数字 ${number}`);
  byId("number-detail").innerHTML = `
    <p class="panel-label">数字 ${number}</p>
    <h3>${meaning}</h3>
    <div class="suit-list">
      <div><strong>权杖 Wands</strong><p>这个数字如何表现为动力、创造、野心或行动。</p></div>
      <div><strong>圣杯 Cups</strong><p>这个数字如何表现为情绪、联结、直觉或渴望。</p></div>
      <div><strong>宝剑 Swords</strong><p>这个数字如何表现为想法、真相、冲突或沟通。</p></div>
      <div><strong>星币 Pentacles</strong><p>这个数字如何表现为金钱、身体、工作、习惯或稳定。</p></div>
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
