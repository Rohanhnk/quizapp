const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const progressText = document.getElementById("progressText");
const scoreText = document.getElementById("score");
const progressBarFull = document.getElementById("progressBarFull");

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
        question: "What is the name of the tournament that Goku participates in during the Universe 6 Saga?",
        choice1: "<Tournament Of Power>",
        choice2: "<World Martial Artist Tournament>",
        choice3: "<Universe 6 Tournamet>",
        choice4: "<Galactic Battle Royale>",
        answer: 3
    },
    {
        question:
        "In Dragon Ball Super, who is the Supreme Kai of Universe 11?",
        choice1: "<Sidra>",
        choice2: "<Fuwa>",
        choice3: "<Marcarita>",
        choice4: "<Gowasu>",
        answer: 3
    },
    {
        question:
        " What technique does Goku use to fight Jiren during the Tournament of Power that drastically increases his power level but puts a strain on his body?",
        choice1: "<kioken x20>",
        choice2: "<Ultra Instinct>",
        choice3: "<Super Saiyan Blue>",
        choice4: "<Spirit Bomb>",
        answer: 2
    }
];

//CONSTANTS
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 3;

startGame = () => {
    questionCounter = 0;
score = 0;
availableQuestions = [...questions];
getNewQuestion();
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

 const questionIndex =  Math.floor(Math.random() * availableQuestions.length);
 currentQuestion = availableQuestions[questionIndex];
 question.innerText = currentQuestion.question;

 choices.forEach (choice => {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
 });

 availableQuestions.splice(questionIndex, 1);
 acceptingAnswers = true;
};

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
    }
            
    selectedChoice.parentElement.classList.add(classToApply);

    setTimeout( () => {
        selectedChoice.parentElement.classList.remove(classToApply);
        getNewQuestion();
    }, 1000);
});
});

incrementScore = num => {
    score += num;
    scoreText.innerText = score;
};

startGame();
