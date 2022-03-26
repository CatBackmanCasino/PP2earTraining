/**
 * Waits for everything to load and then runs the game
 */
document.addEventListener("DOMContentLoaded", runGame());
/**
 * an array of objects containing url's to the samples
 */
let sounds = [{
        note: "c1",
        interval: "first",
        sample: new Audio("assets/media/c1.mp3")
    },
    {
        note: "d1",
        interval: "second",
        sample: new Audio("assets/media/d1.mp3")
    },
    {
        note: "e1",
        interval: "third",
        sample: new Audio("assets/media/e1.mp3")
    },
    {
        note: "f1",
        interval: "fourth",
        sample: new Audio("assets/media/f1.mp3")
    },
    {
        note: "g1",
        interval: "fifth",
        sample: new Audio("assets/media/g1.mp3")
    },
    {
        note: "a1",
        interval: "sixth",
        sample: new Audio("assets/media/a1.mp3")
    },
    {
        note: "b1",
        interval: "seventh",
        sample: new Audio("assets/media/b1.mp3")
    },
    {
        note: "c2",
        interval: "octave",
        sample: new Audio("assets/media/c2.mp3")
    }
];
let interval = "";
let guess = "";
/**
 * the first state. A modal and a start game button
 */
function runGame() {

    document.getElementById("modal-container").style.display = "flex";
    document.getElementById("modal-content").innerHTML = `<h2 aria-label="game name">EarTrainer 1!</h2><br>
    Test your musical skills in this awesome quiz-game.<br><br>
    Instructions:<br>
    1. The game will play two notes.<br>
    2. Guess the interval.<br>Good Luck<br><p>
    <br><button aria-label="start game" id="start-game-button">Start Game</button>`;
    let start = document.getElementById("start-game-button");
    start.addEventListener("click", startGame);
}
/**
 * removes modal and starts the game
 */
function startGame() {

    document.getElementById("modal-container").style.display = "none";
    let questionNumber = document.getElementById("question-number-value").innerHTML;
    if (questionNumber < 10) {
        document.getElementById("question-number-value").innerHTML = ++questionNumber;
        setTimeout(firstNote, 500);

    } else {
        scoreSummary();
    }
}

function scoreSummary() {
    let score = document.getElementById("right-answers-value").innerHTML;
    let questions = document.getElementById("question-number-value").innerHTML;
    let ratio = parseInt(score) / parseInt(questions);
    if (ratio < 0.5) {
        document.getElementById("modal-container").style.display = "flex";
        document.getElementById("modal-content").innerHTML = `<h2 aria-label="your score">You Scored<br>${Math.floor((score)/(questions)*100)}%</h2><br><p>Starting out is never easy. Try again</p><br>
        <button id="try-again" aria-label="try again button">Try Again</button>`;
        let tryAgain = document.getElementById("try-again");
        tryAgain.addEventListener("click", reset);
    }
    if (ratio > 0.5 && ratio < 0.8) {
        document.getElementById("modal-container").style.display = "flex";
        document.getElementById("modal-content").innerHTML = `<h2 aria-label="your score">You Scored<br>${Math.floor((score)/(questions)*100)}%</h2><br><p>Pretty decent!! you're gettin' good ;). Try again</p><br>
        <button id="try-again" aria-label="try again">Try Again</button>`;
        let tryAgain = document.getElementById("try-again");
        tryAgain.addEventListener("click", reset);
    }
    if (ratio > 0.8) {
        document.getElementById("modal-container").style.display = "flex";
        document.getElementById("modal-content").innerHTML = `<h2 aria-label="your score">You Scored<br>${Math.floor((score)/(questions)*100)}%</h2><br><br>Great Job!! You are really goooood =)<br>
        <button id="try-again" aria-label="try again">Try Again</button>`;
        let tryAgain = document.getElementById("try-again");
        tryAgain.addEventListener("click", reset);
    }
}
/**
 * plays the first note
 */
function firstNote() {
    let audio = sounds[0].sample;
    audio.play();
    document.getElementById("sound-one").style.animationPlayState = "running";
    setTimeout(secondNote, 1700);
}
/**
 * plays the 2nd note (random)
 */
function secondNote() {
    let randomNumber = Math.floor(Math.random() * 7);
    let audio = sounds[randomNumber].sample;
    document.getElementById("sound-one").style.animationPlayState = "paused";
    document.getElementById("sound-two").style.animationPlayState = "running";
    audio.play();
    interval = randomNumber;
    console.log(randomNumber);
    setTimeout(answer, 500);
}
/**
 * adds eventlisteners to each button and changes the value of guess to the datavalue of the button clicked
 */

function answer() {
    document.getElementById("sound-two").style.animationPlayState = "paused";
    let answerButtons = document.getElementsByClassName("answer-buttons");
    for (let button of answerButtons) {
        button.addEventListener("click", storeAnswer);
    }
}
/**
 * stores answer in variable
 */

function storeAnswer(event) {
    guess = event.target.dataset.answer;
    checkAnswer();
}
/**
 * checks if interval and guess are the same and increase score wrong/right
 */

 function stopAnimation() {
    let hearts = document.getElementsByClassName("hearts");
    for (var heart of hearts) {
        heart.style.animationPlayState = "paused";
    }
}

function checkAnswer() {

    if (interval == guess) {
        let rightAnswers = document.getElementById("right-answers-value").innerText;
        document.getElementById("right-answers-value").innerText = ++rightAnswers;
        let hearts = document.getElementsByClassName("hearts");
        for (var heart of hearts) {
            heart.style.animationPlayState = "running";
            setTimeout(stopAnimation, 690);  
        }
        startGame();
    } else {
        document.getElementById("modal-container").style.display = "flex";
        let correctAnswer = sounds[interval].interval;
        let userAnswer = sounds[guess].interval;
        let wrongAnswers = document.getElementById("wrong-answers-value").innerText;
        document.getElementById("wrong-answers-value").innerText = ++wrongAnswers;
        document.getElementById("modal-content").innerHTML = `<h2 aria-label="wrong answer">Ooops!</h2> You answered ${userAnswer}. The correct answer was ${correctAnswer}.<br><br><button aria-label=" ok or continue" id="ok">OK!</button>`;
        let okButton = document.getElementById("ok");
        okButton.addEventListener("click", startGame);

    }

}
/**
 * reset values
 */
function reset() {
    document.getElementById("question-number-value").innerHTML = 0;
    document.getElementById("right-answers-value").innerHTML = 0;
    document.getElementById("wrong-answers-value").innerHTML = 0;
    runGame();
}
/**
 * Event Listeners
 */
let start = document.getElementById("start-game-button");
start.addEventListener("click", startGame);
let restartGame = document.getElementById("restart-game-button");
restartGame.addEventListener("click", reset);


// Maybe add funnction that i can play the notes again if i click them?