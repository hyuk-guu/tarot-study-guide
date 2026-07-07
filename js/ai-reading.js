function getSelectedLensSpread() {
  return lensSpreads.find((spread) => spread.name === lensState.spreadName) || lensSpreads[0];
}

function initTarotLens() {
  renderTarotCardDatalist();
  renderLensQuestionTypes();
  renderLensSpreads();
  renderDetectedCards();
  renderLensInterpretation();
  byId("lens-upload").addEventListener("change", handleLensImageUpload);
  byId("analyze-reading-btn").addEventListener("click", analyzeLensReading);
  byId("reset-reading-btn").addEventListener("click", resetLensReading);
  byId("save-reading-btn").addEventListener("click", saveLensReadingToJournal);
}

function getLensManualText() {
  return byId("lens-manual-cards")?.value.trim() || "";
}

function renderTarotCardDatalist() {
  const options = tarotCards.map((card) => `<option value="${escapeHtml(card.name)}">${escapeHtml(card.zhName)} / ${escapeHtml(card.nameEn)} / ${escapeHtml(getCardSystemLine(card))} / ${escapeHtml([...(card.keywordsZh || []), ...(card.keywordsEn || [])].join(" "))}</option>`).join("");
  const existing = document.getElementById("tarot-card-options");
  if (existing) {
    existing.innerHTML = options;
    return;
  }
  document.body.insertAdjacentHTML("beforeend", `<datalist id="tarot-card-options">${options}</datalist>`);
}

function renderLensQuestionTypes() {
  byId("lens-type-chips").innerHTML = lensQuestionTypes.map((type) => `
    <button class="chip-btn ${type === lensState.questionType ? "active" : ""}" type="button" data-lens-type="${type}">${type}</button>
  `).join("");

  document.querySelectorAll("[data-lens-type]").forEach((button) => {
    button.addEventListener("click", () => {
      lensState.questionType = button.dataset.lensType;
      renderLensQuestionTypes();
    });
  });
}

function renderLensSpreads() {
  byId("lens-spread-cards").innerHTML = lensSpreads.map((spread) => `
    <button class="lens-spread-option ${spread.name === lensState.spreadName ? "active" : ""}" type="button" data-lens-spread="${spread.name}">
      <strong>${spread.name}</strong>
      <small>${spread.positions.length} 张牌</small>
    </button>
  `).join("");

  document.querySelectorAll("[data-lens-spread]").forEach((button) => {
    button.addEventListener("click", () => {
      lensState.spreadName = button.dataset.lensSpread;
      lensState.detectedCards = [];
      lensState.interpretation = null;
      renderLensSpreads();
      renderDetectedCards();
      renderLensInterpretation();
      byId("save-reading-btn").disabled = true;
    });
  });

  const selectedSpread = getSelectedLensSpread();
  byId("lens-spread-detail").innerHTML = `
    <strong>${selectedSpread.name}</strong>
    <p>${selectedSpread.note}</p>
    <p>${selectedSpread.positions.join(" · ")}</p>
  `;
}

function handleLensImageUpload(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.addEventListener("load", () => {
    lensState.imageData = reader.result;
    byId("lens-preview").src = lensState.imageData;
    document.querySelector(".upload-card").classList.add("has-image");
    setLensMessage("图片已添加。请写下问题并选择牌阵。");
  });
  reader.readAsDataURL(file);
}

function setLensMessage(message) {
  byId("lens-message").textContent = message;
}

function setLensLoading(isLoading) {
  byId("lens-loading").hidden = !isLoading;
  byId("analyze-reading-btn").disabled = isLoading;
}

function analyzeLensReading() {
  const question = byId("lens-question").value.trim();
  const manualText = getLensManualText();
  if (!lensState.imageData && !manualText) {
    setLensMessage("请先上传照片，或用文字描述你抽到的牌面。");
    return;
  }
  if (!question) {
    setLensMessage("开始解读前，请先写下你的问题。");
    return;
  }

  const loadingLines = [
    "正在读取牌面信息...",
    "正在整理牌阵线索...",
    "正在把符号与你的问题连接起来..."
  ];
  let loadingIndex = 0;
  setLensMessage("");
  setLensLoading(true);
  byId("lens-loading-text").textContent = loadingLines[loadingIndex];
  const loadingTimer = window.setInterval(() => {
    loadingIndex = (loadingIndex + 1) % loadingLines.length;
    byId("lens-loading-text").textContent = loadingLines[loadingIndex];
  }, 330);

  window.setTimeout(() => {
    window.clearInterval(loadingTimer);
    lensState.detectedCards = generateDetectedCards(manualText);
    lensState.interpretation = generateLensInterpretation(question);
    setLensLoading(false);
    setLensMessage("模拟解读完成。你可以检查识别结果，并手动修正不准确的牌。");
    renderDetectedCards();
    renderLensInterpretation();
    byId("save-reading-btn").disabled = false;
  }, 1050);
}

function parseManualDetectedCards(text) {
  const source = String(text || "").toLowerCase();
  if (!source) return [];
  const matched = [];
  tarotCards.forEach((card) => {
    const tokens = [card.zhName, card.nameEn, card.name].filter(Boolean);
    if (tokens.some((token) => source.includes(String(token).toLowerCase()))) {
      matched.push(card);
    }
  });
  return matched;
}

function generateDetectedCards(manualText = "") {
  const selectedSpread = getSelectedLensSpread();
  const manualCards = parseManualDetectedCards(manualText);
  return selectedSpread.positions.map((position) => {
    const card = manualCards.shift() || randomItem(tarotCards);
    const textAroundCard = manualText.toLowerCase();
    const hasReversed = textAroundCard.includes(`${card.zhName} 逆位`.toLowerCase()) || textAroundCard.includes(`${card.nameEn} reversed`.toLowerCase());
    const orientation = hasReversed ? "reversed" : (Math.random() > 0.28 ? "upright" : "reversed");
    return {
      id: makeId(),
      position,
      cardName: card.name,
      orientation,
      confidence: Math.floor(82 + Math.random() * 16)
    };
  });
}

function renderDetectedCards() {
  const container = byId("detected-cards");
  if (!lensState.detectedCards.length) {
    container.innerHTML = `<p class="mini-detail">上传照片并点击“开始解读”后，这里会生成模拟识别到的牌。</p>`;
    return;
  }

  container.innerHTML = lensState.detectedCards.map((item) => `
    <article class="detected-card">
      ${renderCardImage(getCardByName(item.cardName) || { name: item.cardName }, "mini")}
      <header>
        <div>
          <p class="panel-label">${escapeHtml(item.position)}</p>
          ${renderBilingualCardName(getCardByName(item.cardName) || { name: item.cardName }, "h4")}
          <small>${displayOrientation(item.orientation)} · 可信度 ${item.confidence}% · ${escapeHtml(getCardSystemLine(getCardByName(item.cardName) || {}))}</small>
        </div>
        <button class="edit-card-btn" type="button" data-edit-card="${item.id}">编辑</button>
      </header>
      <form class="edit-reading-form" data-edit-form="${item.id}" hidden>
        <input class="card-picker-input" list="tarot-card-options" aria-label="搜索牌名" value="${escapeHtml(item.cardName)}">
        <select aria-label="正逆位">
          <option value="upright" ${item.orientation === "upright" ? "selected" : ""}>正位</option>
          <option value="reversed" ${item.orientation === "reversed" ? "selected" : ""}>逆位</option>
        </select>
        <button class="secondary-btn" type="submit">应用</button>
      </form>
    </article>
  `).join("");
  hydrateCardImages(container);

  renderTarotCardDatalist();

  document.querySelectorAll("[data-edit-card]").forEach((button) => {
    button.addEventListener("click", () => {
      const form = document.querySelector(`[data-edit-form="${button.dataset.editCard}"]`);
      form.hidden = !form.hidden;
    });
  });

  document.querySelectorAll("[data-edit-form]").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      updateDetectedCard(form.dataset.editForm, form);
    });
  });
}

function updateDetectedCard(id, form) {
  const input = form.querySelector(".card-picker-input");
  const selects = form.querySelectorAll("select");
  const selectedCard = getCardByName(input.value) || tarotCards[0];
  lensState.detectedCards = lensState.detectedCards.map((item) => {
    if (item.id !== id) return item;
    return {
      ...item,
      cardName: selectedCard.name,
      orientation: selects[0].value,
      confidence: 100
    };
  });
  const question = byId("lens-question").value.trim();
  if (question) {
    lensState.interpretation = generateLensInterpretation(question);
  }
  renderDetectedCards();
  renderLensInterpretation();
}

function generateLensInterpretation(question) {
  const firstCard = getCardByName(lensState.detectedCards[0]?.cardName) || tarotCards[0];
  const keywordBlend = lensState.detectedCards
    .map((item) => getCardByName(item.cardName)?.keywords[0])
    .filter(Boolean)
    .slice(0, 4)
    .join(", ");
  const spread = getSelectedLensSpread();
  const elementBlend = [...new Set(lensState.detectedCards
    .map((item) => getCardByName(item.cardName)?.element?.split(" ")[0])
    .filter(Boolean))].join("、");

  return {
    core: `关于“${question}”，这个「${spread.name}」牌阵显示，当前局面受到「${keywordBlend || firstCard.keywords.join("、")}」这些主题影响。牌面提醒你先放慢速度，观察重复出现的模式，不必太早强迫自己得出结论。`,
    emotional: `因为这是一个「${lensState.questionType}」类型的问题，可以特别留意这组牌的元素分布：${elementBlend || firstCard.element}。元素会提示问题更偏向行动、情绪、想法还是现实资源。`,
    practical: `把每个牌位当成一份清单。先从最有共鸣的一张牌开始，选择一个可以落地的小行动：澄清信息、设定边界、收集资料、休息，或迈出下一步。`,
    cardByCard: lensState.detectedCards.map((item) => {
      const card = getCardByName(item.cardName);
      const visual = card?.imageReading?.[0] || "可以从人物、颜色、物品、背景和方向开始观察这张牌。";
      const system = card ? `${card.zhName} / ${card.nameEn} 属于 ${card.systemPathZh}` : item.cardName;
      const basic = card ? `关键词：${(card.keywordsZh || card.keywords || []).join("、")}。${getCardSystemLine(card)}。` : "";
      const pending = card && !isDetailedCard(card) ? "该牌完整学习详情待补充。" : "";
      return `${item.position}｜${system}（${displayOrientation(item.orientation)}）：${basic}${visual} ${pending}`;
    }),
    learning: `在塔罗学习中，不建议只背关键词。一张牌可以从元素、数字、花色、颜色和图像符号来理解：先看人物在做什么、面向哪里、手里有什么，再把它和牌阵位置连接起来。`
  };
}

function renderLensInterpretation() {
  const target = byId("lens-interpretation");
  if (!lensState.interpretation) {
    target.innerHTML = `<p class="mini-detail">分析完成后，这里会显示模拟 AI 解读。</p>`;
    return;
  }

  const blocks = [
    ["核心信息", lensState.interpretation.core],
    ["牌组系统线索", lensState.interpretation.emotional],
    ["逐张牌图像解读", (lensState.interpretation.cardByCard || []).join("\n")],
    ["实际建议", lensState.interpretation.practical],
    ["学习笔记", lensState.interpretation.learning]
  ];
  target.innerHTML = blocks.map(([title, text]) => `
    <section class="reading-block">
      <h4>${title}</h4>
      ${String(text).split("\n").map((line) => `<p>${escapeHtml(line)}</p>`).join("")}
    </section>
  `).join("");
}

function saveLensReadingToJournal() {
  if (!lensState.interpretation || !lensState.detectedCards.length) return;
  const question = byId("lens-question").value.trim();
  const entry = {
    id: makeId(),
    type: "ai-reading",
    date: new Date().toISOString().slice(0, 10),
    question,
    questionType: lensState.questionType,
    spread: lensState.spreadName,
    manualText: getLensManualText(),
    imageData: lensState.imageData,
    detectedCards: lensState.detectedCards,
    interpretation: lensState.interpretation
  };
  journalEntries.unshift(entry);
  saveJournalEntries();
  renderJournal();
  setLensMessage("已保存到日志。");
  location.hash = "journal";
}

function resetLensReading() {
  lensState = {
    imageData: "",
    questionType: "开放问题",
    spreadName: "单张牌",
    detectedCards: [],
    interpretation: null
  };
  byId("lens-upload").value = "";
  byId("lens-preview").removeAttribute("src");
  byId("lens-question").value = "";
  if (byId("lens-manual-cards")) byId("lens-manual-cards").value = "";
  document.querySelector(".upload-card").classList.remove("has-image");
  byId("save-reading-btn").disabled = true;
  setLensLoading(false);
  setLensMessage("");
  renderLensQuestionTypes();
  renderLensSpreads();
  renderDetectedCards();
  renderLensInterpretation();
}
