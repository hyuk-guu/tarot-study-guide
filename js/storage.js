let favorites = new Set(JSON.parse(localStorage.getItem("arcanaFavorites") || "[]"));
let journalEntries = JSON.parse(localStorage.getItem("arcanaJournal") || "[]");
let activeFilter = "All";
let activeSpread = null;
let quizIndex = 0;
let quizScore = 0;
let quizAnswered = false;
let currentDailyCard = null;
let lensState = {
  imageData: "",
  questionType: "开放问题",
  spreadName: "单张牌",
  detectedCards: [],
  interpretation: null
};
