const decodeHTML = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.documentElement.textContent;
};

const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const progressText = document.getElementById("progressText");
const scoreText = document.getElementById("score");
const progressBarFull = document.getElementById("progressBarFull");
const loader = document.getElementById("loader");
const game = document.getElementById("game");

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [];

const selectedCategoryId = localStorage.getItem("selectedCategoryId") || "9";

const categoryUrls = {
    "9": "https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple", // General Knowledge
    "11": " https://opentdb.com/api.php?amount=10&category=11&difficulty=easy&type=multiple", // Entertainment: Film
    "15": "https://opentdb.com/api.php?amount=10&category=15&difficulty=easy&type=multiple", // Animals
    "27":"https://opentdb.com/api.php?amount=10&category=27&difficulty=easy&type=multiple",
    "30":"https://opentdb.com/api.php?amount=10&category=31&difficulty=easy&type=multiple",
};

const triviaUrl = categoryUrls[selectedCategoryId];

fetch(triviaUrl)
.then(res => res.json())
.then(loadedQuestions => {
    console.log(loadedQuestions.results);
   questions = loadedQuestions.results.map(loadedQuestion=> {
    const formattedQuestion = {
        question: loadedQuestion.question
    };
    const answerChoices = [... loadedQuestion.incorrect_answers];
    formattedQuestion.answer = Math.floor(Math.random() * 3) * 1;
    answerChoices.splice(formattedQuestion.answer -1, 0,
        loadedQuestion.incorrect_answers);

        answerChoices.forEach((choice, index) => {
            formattedQuestion["choice" + (index + 1)] = choice;
        });

        return formattedQuestion;
    });
   
   startGame();
})
.catch(err =>{
    console.error(err);
});

 
//CONSTANTS
const CORRECT_BONUS = 4;
const MAX_QUESTIONS = 3;
const INCORRECT_BONUS = -1;

startGame = () => {
    questionCounter = 0;
score = 0;
availableQuestions = [...questions];
getNewQuestion();
game.classList.remove("hidden");
loader.classList.add("hidden"); 
};

getNewQuestion = () => {

    if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS){
        localStorage.setItem("mostRecentScore", score);
        //go to the end page
        return window.location.assign("/end.html");
    }

    questionCounter++;
    progressText.innerText = `${questionCounter}/${MAX_QUESTIONS}`;
    //update the progress bar
    progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

    changeBackgroundColor();

 const questionIndex =  Math.floor(Math.random() * availableQuestions.length);
 currentQuestion = availableQuestions[questionIndex];
 question.innerHTML = currentQuestion.question;

 choices.forEach (choice => {
    const number = choice.dataset["number"];
    choice.innerHTML = currentQuestion["choice" + number];
 });

 availableQuestions.splice(questionIndex, 1);
 acceptingAnswers = true;
};

const changeBackgroundColor = ()=> {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    document.body.style.backgroundColor = randomColor;
}

choices.forEach(choice => {
    choice.addEventListener("click", e => {
    if(!acceptingAnswers) return;

    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];

    const classToApply = 
    selectedAnswer == currentQuestion.answer ? "correct" : "incorrect" ;

    if(classToApply === "correct") {
        incrementScore(CORRECT_BONUS);
    } else {
        incrementScore(INCORRECT_BONUS);
    }
            
    selectedChoice.parentElement.classList.add(classToApply);

    setTimeout( () => {
        selectedChoice.parentElement.classList.remove(classToApply);
        acceptingAnswers = true;
        getNewQuestion();
    }, 1000);
});
});

incrementScore = num => {
    score += num;
    scoreText.innerText = score;
};


