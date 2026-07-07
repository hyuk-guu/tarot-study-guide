function saveJournalEntries() {
  localStorage.setItem("arcanaJournal", JSON.stringify(journalEntries));
}

function renderJournal() {
  byId("entry-count").textContent = journalEntries.length;
  byId("journal-list").innerHTML = journalEntries.length ? journalEntries.map(renderJournalEntry).join("") : `<p class="detail-panel">还没有保存任何日志。</p>`;

  document.querySelectorAll("[data-delete-entry]").forEach((button) => {
    button.addEventListener("click", () => deleteJournalEntry(button.dataset.deleteEntry));
  });
  bindSystemInteractions(byId("journal-list"));
}

function renderJournalEntry(entry) {
  if (entry.type === "ai-reading") {
    const interpretation = entry.interpretation || {};
    const detectedCards = entry.detectedCards || [];
    return `
      <article class="journal-entry">
        <header>
          <div>
            <p class="panel-label">${escapeHtml(entry.date)} · AI 解读 · ${escapeHtml(entry.questionType)}</p>
            <h3>${escapeHtml(entry.spread)}</h3>
          </div>
          <button class="delete-entry" type="button" data-delete-entry="${escapeHtml(entry.id)}">删除</button>
        </header>
        <p><strong>问题：</strong>${escapeHtml(entry.question)}</p>
        ${entry.imageData ? `<img class="journal-ai-image" src="${entry.imageData}" alt="已保存的塔罗牌阵预览">` : ""}
        <div class="journal-card-list">
          ${detectedCards.map((card) => `<button type="button" data-related-card="${escapeHtml(card.cardName)}">${escapeHtml(card.position)}：${escapeHtml(card.cardName)}（${displayOrientation(card.orientation)}）</button>`).join("")}
        </div>
        <p><strong>核心信息：</strong>${escapeHtml(interpretation.core)}</p>
        <p><strong>实际建议：</strong>${escapeHtml(interpretation.practical)}</p>
      </article>
    `;
  }

  return `
    <article class="journal-entry">
      <header>
        <div>
          <p class="panel-label">${escapeHtml(entry.date)}</p>
          <h3><button class="journal-card-link" type="button" data-related-card="${escapeHtml(entry.card)}">${escapeHtml(entry.card)}</button></h3>
        </div>
        <button class="delete-entry" type="button" data-delete-entry="${escapeHtml(entry.id)}">删除</button>
      </header>
      <p><strong>问题：</strong>${escapeHtml(entry.question)}</p>
      <p>${escapeHtml(entry.interpretation)}</p>
    </article>
  `;
}

function addJournalEntry(event) {
  event.preventDefault();
  const entry = {
    id: makeId(),
    type: "manual",
    date: byId("entry-date").value,
    question: byId("entry-question").value.trim(),
    card: byId("entry-card").value.trim(),
    interpretation: byId("entry-interpretation").value.trim()
  };
  journalEntries.unshift(entry);
  saveJournalEntries();
  renderJournal();
  event.target.reset();
  setDefaultDate();
}

function deleteJournalEntry(id) {
  journalEntries = journalEntries.filter((entry) => entry.id !== id);
  saveJournalEntries();
  renderJournal();
}

function setDefaultDate() {
  byId("entry-date").valueAsDate = new Date();
}
