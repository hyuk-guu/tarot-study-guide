function renderWeaknessPanel() {
  const panel = byId("weakness-panel");
  if (!panel) return;
  const weakCards = getWeakCards();
  const weaknessStats = getWeaknessStats().filter((item) => item.count > 0).sort((a, b) => b.count - a.count);
  const recentWrongItems = weakCards
    .filter((item) => item.latestWrong)
    .slice(0, 5);

  if (!weakCards.length && !recentWrongItems.length) {
    panel.innerHTML = `
      <div class="weakness-head">
        <strong>薄弱牌与错题</strong>
        <span>需加强牌卡：0 张</span>
      </div>
      <p class="learning-status-note">目前还没有错题记录，完成小测后这里会自动更新。</p>
    `;
    return;
  }

  panel.innerHTML = `
    <div class="weakness-head">
      <strong>薄弱牌与错题</strong>
      <span>需加强牌卡：${weakCards.length} 张</span>
    </div>
    <p class="learning-status-note">最薄弱维度：${escapeHtml(weaknessStats[0]?.label || "暂无")}</p>
    <div class="weakness-list">
      ${recentWrongItems.length ? recentWrongItems.map(({ card, latestWrong }) => {
        const result = latestWrong.result;
        return `
          <article class="weakness-item">
            <div>
              <strong>${escapeHtml(card.zhName)}</strong>
              <span>${escapeHtml(card.nameEn)}</span>
            </div>
            <p>${escapeHtml(result.questionLabel)} · 你的选择：${escapeHtml(result.selectedAnswer)} · 正确答案：${escapeHtml(result.correctAnswer)}</p>
            <small>${formatReviewDate(latestWrong.record.createdAt)}</small>
            <button class="secondary-btn" type="button" data-dashboard-relearn="${escapeHtml(card.id)}">重新学习</button>
            <button class="primary-btn" type="button" data-dashboard-requiz="${escapeHtml(card.id)}">重新小测</button>
          </article>
        `;
      }).join("") : `<p class="learning-status-note">暂无具体错题记录，但有牌卡被标记为需加强。</p>`}
    </div>
  `;
}

function getUserStudyStats() {
  const today = new Date();
  today.setHours(23, 59, 59, 999);
  const stats = {
    total: tarotCards.length,
    mastered: 0,
    studied: 0,
    learning: 0,
    dueReview: 0,
    weak: 0,
    groups: {
      major: { label: "大阿尔卡那", total: tarotCards.filter((card) => card.arcana === "Major").length, mastered: 0 },
      minor: { label: "小阿尔卡那", total: tarotCards.filter((card) => card.arcana === "Minor").length, mastered: 0 },
      wands: { label: "权杖", total: tarotCards.filter((card) => card.suitZh === "权杖").length, mastered: 0 },
      cups: { label: "圣杯", total: tarotCards.filter((card) => card.suitZh === "圣杯").length, mastered: 0 },
      swords: { label: "宝剑", total: tarotCards.filter((card) => card.suitZh === "宝剑").length, mastered: 0 },
      pentacles: { label: "星币", total: tarotCards.filter((card) => card.suitZh === "星币").length, mastered: 0 }
    }
  };

  tarotCards.forEach((card) => {
    const state = getCardLearningState(card.id);
    const isMastered = state.status === "mastered";
    if (isMastered) stats.mastered += 1;
    if (state.status !== "new") stats.studied += 1;
    if (state.status === "learning") stats.learning += 1;
    if (state.status === "weak") stats.weak += 1;
    if (state.nextReviewAt && ["reviewing", "weak"].includes(state.status) && new Date(state.nextReviewAt) <= today) {
      stats.dueReview += 1;
    }
    if (isMastered) {
      if (card.arcana === "Major") stats.groups.major.mastered += 1;
      if (card.arcana === "Minor") stats.groups.minor.mastered += 1;
      if (card.suitZh === "权杖") stats.groups.wands.mastered += 1;
      if (card.suitZh === "圣杯") stats.groups.cups.mastered += 1;
      if (card.suitZh === "宝剑") stats.groups.swords.mastered += 1;
      if (card.suitZh === "星币") stats.groups.pentacles.mastered += 1;
    }
  });

  stats.percent = stats.total ? Math.round((stats.mastered / stats.total) * 100) : 0;
  return stats;
}

function renderStudyProgress() {
  const stats = getUserStudyStats();
  const row = (name, value, total) => {
    const percent = total ? Math.round((value / total) * 100) : 0;
    const valueText = typeof total === "number" ? `${value}/${total}` : String(value);
    return `
      <div class="progress-row">
        <span class="progress-name">${name}</span>
        <div class="progress-track" aria-label="${name}：${valueText}">
          <span style="width: ${percent}%"></span>
        </div>
        <strong>${valueText}</strong>
      </div>
    `;
  };
  byId("progress-list").innerHTML = [
    row(stats.groups.major.label, stats.groups.major.mastered, stats.groups.major.total),
    row(stats.groups.wands.label, stats.groups.wands.mastered, stats.groups.wands.total),
    row(stats.groups.cups.label, stats.groups.cups.mastered, stats.groups.cups.total),
    row(stats.groups.swords.label, stats.groups.swords.mastered, stats.groups.swords.total),
    row(stats.groups.pentacles.label, stats.groups.pentacles.mastered, stats.groups.pentacles.total)
  ].join("");
  const rhythmList = byId("rhythm-list");
  if (rhythmList) {
    rhythmList.innerHTML = `
      <div class="rhythm-stat"><span>✦</span><strong>${stats.studied}</strong><small>已学习</small></div>
      <div class="rhythm-stat"><span>◇</span><strong>${stats.mastered}</strong><small>已掌握</small></div>
      <div class="rhythm-stat"><span>◎</span><strong>${stats.dueReview}</strong><small>今日应复习</small></div>
      <div class="rhythm-stat"><span>✧</span><strong>${stats.weak}</strong><small>薄弱牌</small></div>
    `;
  }
  updateStudyProgress();
  renderDailyReviewPanel();
}

function updateStudyProgress() {
  const stats = getUserStudyStats();
  const progressPill = byId("progress-percent-pill");
  if (progressPill) progressPill.textContent = `${stats.percent}%`;
  renderDailyReviewPanel();
  renderWeaknessPanel();
}

function renderDailyReviewPanel() {
  const panel = byId("daily-review-panel");
  if (!panel) return;
  const dueCards = getDueReviewCards();
  panel.innerHTML = `
    <div>
      <strong>今日复习</strong>
      <p>今日应复习：${dueCards.length} 张</p>
    </div>
    ${dueCards.length
      ? `<button class="primary-btn" type="button" id="start-daily-review">开始今日复习</button>`
      : `<p class="learning-status-note">今天没有到期复习任务。</p>`}
  `;
}

function startNextDueReview() {
  const card = getDueReviewCards()[0];
  if (!card) {
    byId("modal-card-quiz").innerHTML = `<h3>今日复习完成</h3><p>今天没有到期复习任务。</p>`;
    return;
  }
  openCardModal(card.name);
  renderReviewQuiz(card);
}

function drawDailyCard() {
  const card = randomItem(tarotCards);
  currentDailyCard = card;
  const imageSlot = byId("daily-card-image");
  if (imageSlot) {
    imageSlot.innerHTML = renderCardImage(card, "large");
    hydrateCardImages(imageSlot);
  }
  byId("daily-card-name").innerHTML = `<span class="card-name-zh">${escapeHtml(card.zhName)}</span><span class="card-name-en">${escapeHtml(card.nameEn)}</span>`;
  byId("daily-card-keywords").textContent = (card.keywordsZh || card.keywords || []).join("、");
  byId("daily-card-meaning").textContent = isDetailedCard(card)
    ? card.coreThemeZh
    : `${getCardSystemLine(card)}。完整解析待补充。`;
}
