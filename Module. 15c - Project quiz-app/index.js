const questionParent = document.querySelector(".questions-container");
const optionsParent = document.querySelector(".options-contianer");
const nextBtn = document.querySelector(".next");
const quitBtn = document.querySelector(".quit");
const quizCategory = document.querySelector(".quiz-category");
const scoreContiner = document.querySelector(".cur-score");
const rules = document.querySelector(".rule-book");
const quizBook = document.querySelector(".quiz");
const playBtn = document.querySelector(".play-btn");
const qnsCount = document.querySelector(".qns-count");
const result = document.querySelector(".result");

let quizzes = [];
let currentQuestion = 0;
let score = 0;
const getJson = async () => {
  try {
    const {
      data: { results },
    } = await axios.get(
      "https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple"
    );
    return results;
  } catch (err) {
    console.log(err);
  }
};

const getData = async () => {
  quizzes = await getJson();
  console.log(quizzes);
  console.log(quizzes.length);
};

getData();

playBtn.addEventListener("click", () => {
  quizBook.classList.remove("hide");
  rules.classList.add("hide");
});

function createQuestionAndOptions(quizzes, currentQuestion) {
  qnsCount.innerText = `Q${currentQuestion + 1}/${quizzes.length}`;
  scoreContiner.innerText = `Score: ${score}`;
  quizCategory.innerText = quizzes[currentQuestion].category;
  const questionEle = document.createElement("p");
  questionEle.innerText = `Q${currentQuestion + 1}: ${
    quizzes[currentQuestion].question
  }`;
  questionParent.appendChild(questionEle);
  let options = [
    quizzes[currentQuestion].correct_answer,
    ...quizzes[currentQuestion].incorrect_answers,
  ].sort(() => Math.random() - 0.5);
  for (let option of options) {
    const optionBtn = document.createElement("button");
    optionBtn.classList.add("button");
    optionBtn.setAttribute("name", option);
    optionBtn.innerText = option;
    optionsParent.appendChild(optionBtn);
  }
}

nextBtn.addEventListener("click", () => {
  if (nextBtn.innerText === "Next") {
    currentQuestion++;
    console.log({
      currentQuestion,
    });
    questionParent.innerText = "";
    optionsParent.innerText = "";
    qnsCount.innerText = `Q${currentQuestion + 1}/${quizzes.length}`;
    createQuestionAndOptions(quizzes, currentQuestion);
    if (currentQuestion === 4) {
      nextBtn.innerText = "Submit";
      return;
    }
  }
  if (nextBtn.innerText === "Submit") {
    console.log("here");
    quizBook.classList.add("hide");
    result.classList.remove("hide");
  }
});

quitBtn.addEventListener("click", () => {
  currentQuestion = 0;
  questionParent.innerText = "";
  optionsParent.innerText = "";
  score = 0;
  createQuestionAndOptions(quizzes, currentQuestion);
  rules.classList.remove("hide");
  quizBook.classList.add("hide");
});

function disableOptions() {
  document
    .querySelectorAll(".button")
    .forEach((button) => button.setAttribute("disabled", true));
}

optionsParent.addEventListener("click", (e) => {
  if (e.target.name === quizzes[currentQuestion].correct_answer) {
    e.target.classList.add("success");
    disableOptions();
    score++;
    scoreContiner.innerText = `Score: ${score}`;
    console.log(score);
  } else if (e.target.name !== quizzes[currentQuestion].correct_answer) {
    e.target.classList.add("error");
    disableOptions();
  }
});

setTimeout(() => createQuestionAndOptions(quizzes, currentQuestion), 2000);
