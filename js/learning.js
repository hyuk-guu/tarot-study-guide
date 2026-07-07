function renderVisualReadingList(card) {
  return (card.imageReading || []).map((item) => `<li>${escapeHtml(item)}</li>`).join("");
}

function getCardByName(name) {
  const normalized = String(name || "").trim();
  return tarotCards.find((card) =>
    card.name === normalized ||
    card.nameEn === normalized ||
    card.zhName === normalized ||
    `${card.zhName} ${card.nameEn}` === normalized ||
    normalized.endsWith(card.nameEn)
  );
}

function isDetailedCard(card) {
  return Boolean(card && cardLearningData[card.name]);
}

function getCardSystemLine(card) {
  return [card.arcanaZh || displayCardGroup(card.arcana), card.suitZh, card.elementZh || card.element, card.number ? `#${card.number}` : ""].filter(Boolean).join(" · ");
}

function getStudyStats() {
  const detailed = tarotCards.filter(isDetailedCard);
  const suitCount = (suitZh) => detailed.filter((card) => card.suitZh === suitZh).length;
  return {
    total: tarotCards.length,
    detailed: detailed.length,
    pending: tarotCards.length - detailed.length,
    major: detailed.filter((card) => card.arcana === "Major").length,
    minor: detailed.filter((card) => card.arcana === "Minor").length,
    suits: {
      权杖: suitCount("权杖"),
      圣杯: suitCount("圣杯"),
      宝剑: suitCount("宝剑"),
      星币: suitCount("星币")
    }
  };
}

function saveFavorites() {
  localStorage.setItem("arcanaFavorites", JSON.stringify([...favorites]));
}

function getVisitedStatus() {
  return JSON.parse(localStorage.getItem("tarotVisited") || "{}");
}

function markCardVisited(cardId) {
  if (!cardId) return;
  if (!localStorage.getItem("tarotVisited")) initLearningStatus();

  const visited = getVisitedStatus();
  visited[cardId] = true;
  localStorage.setItem("tarotVisited", JSON.stringify(visited));
}

function getVisitedStats() {
  const visited = getVisitedStatus();
  const visitedCount = tarotCards.filter((card) => visited[card.id] === true).length;
  const total = tarotCards.length;
  const percent = total ? Math.round((visitedCount / total) * 100) : 0;
  return { visitedCount, total, percent };
}

function getDefaultCardLearningState(cardId) {
  return {
    cardId,
    status: "new",
    masteryLevel: 0,
    firstLearnedAt: null,
    lastReviewedAt: null,
    nextReviewAt: null,
    testHistory: [],
    correctStreak: 0,
    wrongCount: 0,
    reviewCount: 0,
    updatedAt: null
  };
}

function getLearningState() {
  try {
    const stored = JSON.parse(localStorage.getItem("tarotLearningState") || "{}");
    return stored && typeof stored === "object" ? stored : {};
  } catch (error) {
    console.warn("Unable to read tarotLearningState.", error);
    return {};
  }
}

function saveLearningState(state) {
  try {
    localStorage.setItem("tarotLearningState", JSON.stringify(state));
  } catch (error) {
    console.warn("Unable to save tarotLearningState.", error);
  }
}

function normalizeCardLearningState(cardId, value = {}) {
  const merged = { ...getDefaultCardLearningState(cardId), ...(value || {}), cardId };
  merged.masteryLevel = Math.min(5, Math.max(0, Number(merged.masteryLevel || 0)));
  merged.testHistory = Array.isArray(merged.testHistory) ? merged.testHistory : [];
  merged.correctStreak = Number(merged.correctStreak || 0);
  merged.wrongCount = Number(merged.wrongCount || 0);
  merged.reviewCount = Number(merged.reviewCount || 0);
  if (!["new", "learning", "reviewing", "mastered", "weak"].includes(merged.status)) {
    merged.status = "new";
  }
  return merged;
}

function getCardLearningState(cardId) {
  const existing = getLearningState()[cardId] || {};
  return normalizeCardLearningState(cardId, existing);
}

function updateCardLearningState(cardId, patch = {}) {
  if (!cardId) return null;
  const state = getLearningState();
  const updated = {
    ...getDefaultCardLearningState(cardId),
    ...(state[cardId] || {}),
    ...patch,
    cardId,
    updatedAt: new Date().toISOString()
  };
  updated.masteryLevel = Math.min(5, Math.max(0, Number(updated.masteryLevel || 0)));
  updated.testHistory = Array.isArray(updated.testHistory) ? updated.testHistory : [];
  state[cardId] = updated;
  saveLearningState(state);
  renderStudyProgress();
  return updated;
}

function resetLearningState() {
  localStorage.removeItem("tarotLearningState");
  renderStudyProgress();
}

function getLearningBackupFileName() {
  const date = new Date().toISOString().slice(0, 10);
  return `tarot-learning-backup-${date}.json`;
}

function buildLearningBackupPayload() {
  return {
    metadata: {
      app: "tarot-study",
      version: 1,
      exportedAt: new Date().toISOString(),
      totalCards: tarotCards.length
    },
    learningState: getLearningState()
  };
}

function exportLearningData() {
  const payload = buildLearningBackupPayload();
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = getLearningBackupFileName();
  document.body.appendChild(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 0);
  showToast("学习记录已导出。");
}

function normalizeImportedLearningState(learningState) {
  if (!learningState || typeof learningState !== "object" || Array.isArray(learningState)) {
    throw new Error("导入文件缺少 learningState。");
  }

  const validCardIds = new Set(tarotCards.map((card) => card.id));
  const nextState = {};
  Object.entries(learningState).forEach(([key, value]) => {
    const cardId = String(value?.cardId || key || "").trim();
    if (!validCardIds.has(cardId)) return;
    nextState[cardId] = normalizeCardLearningState(cardId, value);
  });
  return nextState;
}

function applyLearningDataImport(payload) {
  if (!payload || typeof payload !== "object") throw new Error("导入文件格式不正确。");
  if (payload.metadata?.app !== "tarot-study") throw new Error("这不是 tarot-study 的学习记录备份。");
  const nextState = normalizeImportedLearningState(payload.learningState);
  saveLearningState(nextState);
  refreshLearningDataViews();
  return nextState;
}

function refreshLearningDataViews() {
  renderStudyProgress();
  renderCards();
  const modal = byId("card-modal");
  if (modal?.classList.contains("open")) {
    const zhName = modal.querySelector("#modal-title .card-name-zh")?.textContent?.trim();
    const enName = modal.querySelector("#modal-title .card-name-en")?.textContent?.trim();
    const card = getCardByName(enName || zhName);
    if (card) refreshCardLearningStatus(card);
  }
}

function importLearningData(file) {
  if (!file) return;
  const confirmed = window.confirm("导入会覆盖当前浏览器中的学习记录，建议先导出备份。确定继续吗？");
  if (!confirmed) return;

  const reader = new FileReader();
  reader.addEventListener("load", () => {
    try {
      const payload = JSON.parse(String(reader.result || ""));
      applyLearningDataImport(payload);
      showToast("学习记录导入成功。");
    } catch (error) {
      console.warn("Unable to import tarot learning data.", error);
      showToast(error.message || "导入失败，请检查 JSON 文件。", "error");
    }
  });
  reader.addEventListener("error", () => {
    showToast("导入失败，无法读取这个文件。", "error");
  });
  reader.readAsText(file);
}

function getLearningStatusLabel(status) {
  return {
    new: "未开始",
    learning: "学习中",
    reviewing: "待复习",
    mastered: "已掌握",
    weak: "需加强"
  }[status] || "未开始";
}

function formatReviewDate(value) {
  if (!value) return "暂无";
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? "暂无" : date.toISOString().slice(0, 10);
}

function isReviewDue(value) {
  if (!value) return false;
  const due = new Date(value);
  if (Number.isNaN(due.getTime())) return false;
  const today = new Date();
  today.setHours(23, 59, 59, 999);
  return due <= today;
}

function getReviewIntervalDays(masteryLevel) {
  const level = Math.min(5, Math.max(1, Number(masteryLevel || 1)));
  return { 1: 1, 2: 3, 3: 7, 4: 14, 5: 30 }[level];
}

function calculateNextReviewDate(masteryLevel) {
  const date = new Date();
  date.setDate(date.getDate() + getReviewIntervalDays(masteryLevel));
  return date.toISOString();
}

function getDueReviewCards() {
  return tarotCards
    .map((card) => ({ card, state: getCardLearningState(card.id) }))
    .filter(({ state }) => ["reviewing", "weak"].includes(state.status) && isReviewDue(state.nextReviewAt))
    .sort((a, b) => {
      if (a.state.status !== b.state.status) return a.state.status === "weak" ? -1 : 1;
      const aDate = new Date(a.state.nextReviewAt).getTime();
      const bDate = new Date(b.state.nextReviewAt).getTime();
      if (aDate !== bDate) return aDate - bDate;
      return a.state.masteryLevel - b.state.masteryLevel;
    })
    .map(({ card }) => card);
}

const questionTypeLabels = {
  name: "牌名识别",
  keyword: "关键词理解",
  upright: "正位含义",
  reversed: "逆位提醒",
  scenario: "情境应用",
  distinction: "学习重点",
  visual: "图像象征",
  system: "元素/牌组理解",
  contrast: "易混淆辨析"
};

function getQuestionResults() {
  return [...document.querySelectorAll("#modal-card-quiz .card-quiz-question")].map((question) => {
    const questionType = question.dataset.questionType || "scenario";
    const selectedAnswer = question.dataset.selected || "未作答";
    const correctAnswer = question.dataset.answer || "待补充";
    return {
      questionType,
      questionLabel: question.dataset.questionLabel || questionTypeLabels[questionType] || "综合理解",
      questionText: question.dataset.questionText || question.querySelector("legend")?.textContent?.replace(/^\d+\.\s*/, "") || "待补充",
      selectedAnswer,
      correctAnswer,
      isCorrect: selectedAnswer === correctAnswer
    };
  });
}

function getLatestWrongResult(state) {
  const history = [...(state.testHistory || [])].reverse();
  for (const record of history) {
    const wrong = (record.questionResults || []).filter((result) => result && result.isCorrect === false);
    if (wrong.length) return { record, result: wrong[0] };
  }
  return null;
}

function getWeaknessStats() {
  const stats = Object.fromEntries(Object.entries(questionTypeLabels).map(([type, label]) => [type, { type, label, count: 0 }]));
  Object.values(getLearningState()).forEach((state) => {
    (state.testHistory || []).forEach((record) => {
      (record.questionResults || []).forEach((result) => {
        if (!result || result.isCorrect !== false) return;
        const type = result.questionType || "scenario";
        if (!stats[type]) stats[type] = { type, label: result.questionLabel || "综合理解", count: 0 };
        stats[type].count += 1;
      });
    });
  });
  return Object.values(stats);
}

function getWeakCards() {
  return tarotCards
    .map((card) => {
      const state = getCardLearningState(card.id);
      const latestWrong = getLatestWrongResult(state);
      return {
        card,
        state,
        latestWrong,
        hasRecentWrong: Boolean(latestWrong)
      };
    })
    .filter(({ state, hasRecentWrong }) => state.status === "weak" || state.wrongCount > 0 || hasRecentWrong)
    .sort((a, b) => {
      if (a.state.status !== b.state.status) {
        if (a.state.status === "weak") return -1;
        if (b.state.status === "weak") return 1;
      }
      if (b.state.wrongCount !== a.state.wrongCount) return b.state.wrongCount - a.state.wrongCount;
      const aTime = new Date(a.latestWrong?.record?.createdAt || a.state.updatedAt || 0).getTime();
      const bTime = new Date(b.latestWrong?.record?.createdAt || b.state.updatedAt || 0).getTime();
      if (bTime !== aTime) return bTime - aTime;
      return a.state.masteryLevel - b.state.masteryLevel;
    });
}

function renderCardLearningStatus(card) {
  const state = getCardLearningState(card.id);
  const needsPractice = state.status === "weak" || state.wrongCount > 0;
  let action = "";
  if (state.status === "new") {
    action = `<button class="primary-btn" type="button" data-start-learning="${escapeHtml(card.id)}">开始学习</button>`;
  } else if (state.status === "learning") {
    action = `<button class="primary-btn" type="button" data-start-card-quiz="${escapeHtml(card.id)}">进入小测</button>`;
  } else if (state.status === "weak") {
    action = `<div class="learning-actions">
      <button class="secondary-btn" type="button" data-relearn-card="${escapeHtml(card.id)}">重新学习</button>
      <button class="primary-btn" type="button" data-start-card-quiz="${escapeHtml(card.id)}">重新小测</button>
    </div>`;
  } else if (state.status === "reviewing") {
    action = isReviewDue(state.nextReviewAt)
      ? `<button class="primary-btn" type="button" data-start-review-quiz="${escapeHtml(card.id)}">开始复习</button>`
      : `<p class="learning-status-note">你已通过初次小测，请在下次复习日期回来复习。</p>`;
  } else if (state.status === "mastered") {
    action = `<p class="learning-status-note">这张牌已掌握。</p>`;
  }
  if (needsPractice && state.status !== "weak") {
    action += `<div class="learning-actions">
      <button class="secondary-btn" type="button" data-relearn-card="${escapeHtml(card.id)}">重新学习</button>
      <button class="primary-btn" type="button" data-start-card-quiz="${escapeHtml(card.id)}">重新小测</button>
    </div>`;
  }
  return `
    <div class="learning-status-grid">
      <div>
        <span>学习状态</span>
        <strong>${getLearningStatusLabel(state.status)}</strong>
      </div>
      <div>
        <span>掌握等级</span>
        <strong>${state.masteryLevel}/5</strong>
      </div>
      <div>
        <span>下次复习</span>
        <strong>${formatReviewDate(state.nextReviewAt)}</strong>
      </div>
    </div>
    ${needsPractice ? `<p class="learning-warning">这张牌需要加强，建议重新学习后再小测。</p>` : ""}
    ${action}
  `;
}

function refreshCardLearningStatus(card) {
  const target = byId("modal-learning-status");
  if (target && card) target.innerHTML = renderCardLearningStatus(card);
}

function optionText(value, fallback = "待补充") {
  return getSafeText(value, fallback, 58);
}

function cardMeaningOption(card, type = "upright") {
  if (!card) return "待补充";
  if (type === "reversed") return optionText(card.reversed || card.reversedLogic || card.coreThemeZh);
  return optionText(card.upright || card.uprightScenes || card.coreThemeZh || card.imageReading?.[0]);
}

function cardSituationOption(card) {
  const keywords = getCardKeywords(card).slice(0, 4).join("、");
  return normalizeQuizOptionText(`你可能正在经历${keywords}相关的状态`, {
    mode: "scenario",
    fallback: "你需要观察当前状态，再做出清醒选择"
  });
}

function cardDistinctionOption(card) {
  const source = card.studyTip || card.coreThemeZh || card.imageReading?.[0] || getCardKeywords(card);
  return sanitizeQuizOptionText(source, card, {
    mode: "meaning",
    fallback: "抓住核心主题，避免只背单一关键词"
  });
}

function createCardQuizQuestion(card, config) {
  const answer = sanitizeQuizOptionText(config.answer, card, {
    mode: config.mode,
    fallback: config.fallback
  });
  return {
    id: `${card.id}-${config.type}`,
    type: config.type,
    label: config.label,
    prompt: config.prompt,
    options: buildQuizOptions(config.answer, config.pools, config.fallbackPool || [], {
      card,
      mode: config.mode,
      fallback: config.fallback
    }),
    correctAnswer: answer,
    allowCardNames: false
  };
}

function tomorrowIsoString() {
  const date = new Date();
  date.setDate(date.getDate() + 1);
  return date.toISOString();
}

function generateCardQuiz(card) {
  const otherCards = tarotCards.filter((item) => item.id !== card.id);
  const keyword = getCardKeywordOption(card);
  const otherKeywordOptions = otherCards.map(getCardKeywordOption);
  return [
    createCardQuizQuestion(card, {
      type: "keyword",
      label: "关键词理解",
      prompt: "这张牌最核心的关键词组合是？",
      answer: keyword,
      pools: [otherKeywordOptions],
      mode: "keyword",
      fallback: "核心主题、能量变化、学习重点"
    }),
    createCardQuizQuestion(card, {
      type: "upright",
      label: questionTypeLabels.upright,
      prompt: "这张牌正位时，更强调哪种状态？",
      answer: getCardUprightMeaning(card),
      pools: [otherCards.map(getCardUprightMeaning)],
      mode: "upright",
      fallback: "保持开放，理解当前主题并采取行动"
    }),
    createCardQuizQuestion(card, {
      type: "reversed",
      label: questionTypeLabels.reversed,
      prompt: "这张牌逆位时，更可能提醒什么？",
      answer: getCardReversedMeaning(card),
      pools: [otherCards.map(getCardReversedMeaning)],
      mode: "reversed",
      fallback: "可能提醒能量受阻、内化或失衡"
    }),
    createCardQuizQuestion(card, {
      type: "scenario",
      label: "情境应用",
      prompt: "如果这张牌出现在近期状态中，更适合如何理解？",
      answer: cardSituationOption(card),
      pools: [otherCards.map(cardSituationOption)],
      mode: "scenario",
      fallback: "你需要观察当前状态，再做出清醒选择"
    }),
    createCardQuizQuestion(card, {
      type: "distinction",
      label: "学习重点",
      prompt: "理解这张牌时，最应该抓住哪一个重点？",
      answer: cardDistinctionOption(card),
      pools: [otherCards.map(cardDistinctionOption)],
      mode: "meaning",
      fallback: "抓住核心主题，避免只背单一关键词"
    })
  ];
}

function renderCardQuiz(card) {
  const questions = generateCardQuiz(card);
  byId("modal-card-quiz").innerHTML = `
    <h3>基础小测</h3>
    <p class="learning-status-note">共 5 题。完成后会更新这张牌的学习状态。</p>
    ${questions.map((item, index) => `
      <fieldset class="card-quiz-question" data-question-index="${index}" data-question-type="${escapeHtml(item.type)}" data-question-label="${escapeHtml(item.label)}" data-question-text="${escapeHtml(item.prompt)}" data-answer="${escapeHtml(item.correctAnswer)}">
        <legend>${index + 1}. ${escapeHtml(item.prompt)}</legend>
        <div class="quiz-options">
          ${item.options.map((option) => `<button class="quiz-option" type="button" data-card-quiz-option="${escapeHtml(option)}">${escapeHtml(option)}</button>`).join("")}
        </div>
      </fieldset>
    `).join("")}
    <button class="primary-btn" type="button" data-submit-card-quiz="${escapeHtml(card.id)}">提交小测</button>
    <p id="card-quiz-feedback" class="learning-status-note"></p>
  `;
}

function generateReviewQuiz(card) {
  const initial = generateCardQuiz(card);
  const otherCards = tarotCards.filter((item) => item.id !== card.id);
  return [
    initial[0],
    createCardQuizQuestion(card, {
      type: "reversed",
      label: "正逆位理解",
      prompt: "这张牌的正逆位理解，哪一项更合理？",
      answer: getCardReversedMeaning(card),
      pools: [otherCards.map(getCardReversedMeaning)],
      fallbackPool: tarotCards.map(getCardUprightMeaning),
      mode: "reversed",
      fallback: "可能提醒能量受阻、内化或失衡"
    }),
    initial[3]
  ];
}

function renderReviewQuiz(card) {
  const questions = generateReviewQuiz(card);
  byId("modal-card-quiz").innerHTML = `
    <h3>今日复习小测</h3>
    <p class="learning-status-note">共 3 题。通过后会更新掌握等级和下次复习日期。</p>
    ${questions.map((item, index) => `
      <fieldset class="card-quiz-question" data-question-index="${index}" data-question-type="${escapeHtml(item.type)}" data-question-label="${escapeHtml(item.label)}" data-question-text="${escapeHtml(item.prompt)}" data-answer="${escapeHtml(item.correctAnswer)}">
        <legend>${index + 1}. ${escapeHtml(item.prompt)}</legend>
        <div class="quiz-options">
          ${item.options.map((option) => `<button class="quiz-option" type="button" data-card-quiz-option="${escapeHtml(option)}">${escapeHtml(option)}</button>`).join("")}
        </div>
      </fieldset>
    `).join("")}
    <button class="primary-btn" type="button" data-submit-review-quiz="${escapeHtml(card.id)}">提交复习</button>
    <p id="card-quiz-feedback" class="learning-status-note"></p>
  `;
}

function submitCardQuiz(card) {
  const questions = [...document.querySelectorAll("#modal-card-quiz .card-quiz-question")];
  const total = questions.length;
  const score = questions.filter((question) => question.dataset.selected === question.dataset.answer).length;
  const questionResults = getQuestionResults();
  const current = getCardLearningState(card.id);
  const now = new Date().toISOString();
  const history = [...current.testHistory, { type: "initial", score, total, passed: score >= 4, createdAt: now, questionResults }];
  const basePatch = {
    firstLearnedAt: current.firstLearnedAt || now,
    testHistory: history
  };
  let message = "建议重新学习后再测一次。";
  let patch = {
    ...basePatch,
    status: "learning",
    masteryLevel: 0,
    wrongCount: current.wrongCount + 1,
    correctStreak: 0
  };

  if (score >= 4) {
    message = "小测通过，已进入待复习。";
    patch = {
      ...basePatch,
      status: "reviewing",
      masteryLevel: 1,
      lastReviewedAt: now,
      nextReviewAt: tomorrowIsoString(),
      reviewCount: current.reviewCount + 1,
      correctStreak: current.correctStreak + 1
    };
  } else if (score === 3) {
    message = "接近通过，但仍需加强。";
    patch = {
      ...basePatch,
      status: "weak",
      masteryLevel: 0,
      lastReviewedAt: now,
      nextReviewAt: tomorrowIsoString(),
      reviewCount: current.reviewCount + 1,
      wrongCount: current.wrongCount + 1,
      correctStreak: 0
    };
  }

  updateCardLearningState(card.id, patch);
  refreshCardLearningStatus(card);
  renderDailyReviewPanel();
  renderWeaknessPanel();
  byId("modal-card-quiz").innerHTML = `<h3>基础小测结果</h3><p>得分：${score}/${total}</p><p>${message}</p>`;
}

function submitReviewQuiz(card) {
  const questions = [...document.querySelectorAll("#modal-card-quiz .card-quiz-question")];
  const total = questions.length;
  const score = questions.filter((question) => question.dataset.selected === question.dataset.answer).length;
  const questionResults = getQuestionResults();
  const current = getCardLearningState(card.id);
  const now = new Date().toISOString();
  const passed = score >= 2;
  const nextLevel = passed
    ? Math.min(current.masteryLevel + 1, 5)
    : Math.max(current.masteryLevel - 1, 0);
  const history = [...current.testHistory, { type: "review", score, total, passed, createdAt: now, questionResults }];
  const patch = passed ? {
    status: nextLevel >= 5 ? "mastered" : "reviewing",
    masteryLevel: nextLevel,
    lastReviewedAt: now,
    nextReviewAt: calculateNextReviewDate(nextLevel),
    reviewCount: current.reviewCount + 1,
    correctStreak: current.correctStreak + 1,
    testHistory: history
  } : {
    status: "weak",
    masteryLevel: nextLevel,
    lastReviewedAt: now,
    nextReviewAt: tomorrowIsoString(),
    reviewCount: current.reviewCount + 1,
    wrongCount: current.wrongCount + 1,
    correctStreak: 0,
    testHistory: history
  };
  const message = passed
    ? (nextLevel >= 5 ? "复习通过，已掌握这张牌。" : "复习通过，掌握等级提升。")
    : "复习未通过，已标记为需加强。";

  updateCardLearningState(card.id, patch);
  refreshCardLearningStatus(card);
  renderDailyReviewPanel();
  renderWeaknessPanel();
  const remaining = getDueReviewCards();
  byId("modal-card-quiz").innerHTML = `
    <h3>复习结果</h3>
    <p>得分：${score}/${total}</p>
    <p>${message}</p>
    ${remaining.length
      ? `<button class="primary-btn" type="button" data-start-next-review>继续复习下一张</button>`
      : `<p class="learning-status-note">今日复习完成。</p>`}
  `;
}

Object.assign(window, {
  tarotCards,
  getDefaultCardLearningState,
  getLearningState,
  saveLearningState,
  getCardLearningState,
  updateCardLearningState,
  resetLearningState,
  exportLearningData,
  importLearningDataFromFile: importLearningData,
  getReviewIntervalDays,
  calculateNextReviewDate,
  getDueReviewCards,
  getWeaknessStats,
  getWeakCards
});
