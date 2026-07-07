function initLearningStatus() {
  if (localStorage.getItem("tarotVisited")) return;

  const initialVisited = Object.fromEntries(tarotCards.map((card) => [card.id, false]));
  localStorage.setItem("tarotVisited", JSON.stringify(initialVisited));
}

function initFilters() {
  byId("card-search").addEventListener("input", renderCards);
  byId("card-filters").addEventListener("click", (event) => {
    const button = event.target.closest("[data-filter]");
    if (!button) return;
    activeFilter = button.dataset.filter;
    document.querySelectorAll("[data-filter]").forEach((filterButton) => {
      filterButton.classList.toggle("active", filterButton === button);
    });
    renderCards();
  });
}

function init() {
  initLearningStatus();
  quizQuestions = generateQuizQuestions();
  renderStudyProgress();
  updateStudyProgress();
  drawDailyCard();
  renderKnowledgeMap();
  renderCards();
  renderElements();
  renderNumbers();
  renderSpreads();
  renderColors();
  renderQuiz();
  initTarotLens();
  renderJournal();
  setDefaultDate();
  initFilters();

  byId("draw-card-btn").addEventListener("click", drawDailyCard);
  byId("daily-card-detail").addEventListener("click", () => {
    if (currentDailyCard) openCardModal(currentDailyCard.name);
  });
  byId("random-fill-btn").addEventListener("click", randomFillSpread);
  byId("restart-quiz-btn").addEventListener("click", restartQuiz);
  byId("journal-form").addEventListener("submit", addJournalEntry);
  byId("card-modal").addEventListener("click", (event) => {
    const startLearningButton = event.target.closest("[data-start-learning]");
    const startQuizButton = event.target.closest("[data-start-card-quiz]");
    const startReviewButton = event.target.closest("[data-start-review-quiz]");
    const relearnButton = event.target.closest("[data-relearn-card]");
    const optionButton = event.target.closest("[data-card-quiz-option]");
    const submitQuizButton = event.target.closest("[data-submit-card-quiz]");
    const submitReviewButton = event.target.closest("[data-submit-review-quiz]");
    const nextReviewButton = event.target.closest("[data-start-next-review]");

    if (startLearningButton) {
      const card = tarotCards.find((item) => item.id === startLearningButton.dataset.startLearning);
      if (!card) return;
      const current = getCardLearningState(card.id);
      updateCardLearningState(card.id, {
        status: "learning",
        firstLearnedAt: current.firstLearnedAt || new Date().toISOString()
      });
      refreshCardLearningStatus(card);
      return;
    }

    if (relearnButton) {
      const card = tarotCards.find((item) => item.id === relearnButton.dataset.relearnCard);
      if (!card) return;
      updateCardLearningState(card.id, { status: "learning" });
      refreshCardLearningStatus(card);
      byId("modal-card-quiz").innerHTML = "";
      return;
    }

    if (startQuizButton) {
      const card = tarotCards.find((item) => item.id === startQuizButton.dataset.startCardQuiz);
      if (card) renderCardQuiz(card);
      return;
    }

    if (startReviewButton) {
      const card = tarotCards.find((item) => item.id === startReviewButton.dataset.startReviewQuiz);
      if (card) renderReviewQuiz(card);
      return;
    }

    if (optionButton) {
      const question = optionButton.closest(".card-quiz-question");
      if (!question) return;
      question.dataset.selected = optionButton.dataset.cardQuizOption;
      question.querySelectorAll("[data-card-quiz-option]").forEach((button) => {
        button.classList.toggle("selected", button === optionButton);
      });
      return;
    }

    if (submitQuizButton) {
      const card = tarotCards.find((item) => item.id === submitQuizButton.dataset.submitCardQuiz);
      if (card) submitCardQuiz(card);
      return;
    }

    if (submitReviewButton) {
      const card = tarotCards.find((item) => item.id === submitReviewButton.dataset.submitReviewQuiz);
      if (card) submitReviewQuiz(card);
      return;
    }

    if (nextReviewButton) {
      startNextDueReview();
    }
  });
  byId("daily-review-panel").addEventListener("click", (event) => {
    if (event.target.closest("#start-daily-review")) startNextDueReview();
  });
  byId("weakness-panel").addEventListener("click", (event) => {
    const relearnButton = event.target.closest("[data-dashboard-relearn]");
    const requizButton = event.target.closest("[data-dashboard-requiz]");
    if (relearnButton) {
      const card = tarotCards.find((item) => item.id === relearnButton.dataset.dashboardRelearn);
      if (!card) return;
      updateCardLearningState(card.id, { status: "learning" });
      openCardModal(card.name);
      return;
    }
    if (requizButton) {
      const card = tarotCards.find((item) => item.id === requizButton.dataset.dashboardRequiz);
      if (!card) return;
      openCardModal(card.name);
      renderCardQuiz(card);
    }
  });
  document.querySelectorAll("[data-close-modal]").forEach((element) => {
    element.addEventListener("click", closeCardModal);
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeCardModal();
  });
}

document.addEventListener("DOMContentLoaded", init);
