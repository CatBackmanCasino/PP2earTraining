/**
 * Waits for everything to load and then runs the game
 */
document.addEventListener("DOMContentLoaded", runGame())
/**
 * an array of objects containing url's to the samples
 */
let sounds = [{
        note: "c1",
        interval: "first",
        sample: "assets/media/c1.mp3"
    },
    {
        note: "d1",
        interval: "second",
        sample: "assets/media/d1.mp3"
    },
    {
        note: "e1",
        interval: "third",
        sample: "assets/media/e1.mp3"
    },
    {
        note: "f1",
        interval: "fourth",
        sample: "assets/media/f1.mp3"
    },
    {
        note: "g1",
        interval: "fifth",
        sample: "assets/media/g1.mp3"
    },
    {
        note: "a1",
        interval: "sixth",
        sample: "assets/media/a1.mp3"
    },
    {
        note: "b1",
        interval: "seventh",
        sample: "assets/media/b1.mp3"
    },
    {
        note: "c2",
        interval: "octave",
        sample: "assets/media/c2.mp3"
    }
]
let interval = "";
let guess = "";
/**
 * the first state. A modal and a start game button
 */
function runGame() {

    document.getElementById("modal-container").style.display = "flex";
    document.getElementById("modal-content").innerHTML = `<h2>EarTrainer 1!</h2><br>
    Test your musical skills in this awesome quiz-game.<br><br>
    Instructions:<br>
    1. The game will play two notes.<br>
    2. Guess the interval.<br>Good Luck<br><p>
    <br><button id="start-game-button">Start Game</button>`
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
        setTimeout(firstNote, 500)

    } else {
        scoreSummary()
    }
}

function scoreSummary() {
    let score = document.getElementById("right-answers-value").innerHTML;
    let questions = document.getElementById("question-number-value").innerHTML;
    let ratio = parseInt(score) / parseInt(questions);
    console.log(ratio)
    if (ratio < 0.5) {
        document.getElementById("modal-container").style.display = "flex";
        document.getElementById("modal-content").innerHTML = `<h2>You Scored<br>${Math.floor((score)/(questions)*100)}%</h2><br><p>Starting out is never easy. Try again</p><br>
        <button id="try-again">Try Again</button>`
        let tryAgain = document.getElementById("try-again")
        tryAgain.addEventListener("click", reset)
    }
    if (ratio > 0.5 && ratio < 0.8) {
        document.getElementById("modal-container").style.display = "flex";
        document.getElementById("modal-content").innerHTML = `<h2>You Scored<br>${Math.floor((score)/(questions)*100)}%</h2><br><p>Pretty decent!! you're gettin' good ;). Try again</p><br>
        <button id="try-again">Try Again</button>`
        let tryAgain = document.getElementById("try-again")
        tryAgain.addEventListener("click", reset)
    }
    if (ratio > 0.8) {
        document.getElementById("modal-container").style.display = "flex";
        document.getElementById("modal-content").innerHTML = `<h2>You Scored<br>${Math.floor((score)/(questions)*100)}%</h2><br><br>Great Job!! You are really goooood =)<br>
        <button id="try-again">Try Again</button>`
        let tryAgain = document.getElementById("try-again")
        tryAgain.addEventListener("click", reset)
    }
}
/**
 * plays the first note
 */
function firstNote() {
    let audio = new Audio(sounds[0].sample)
    audio.play();
    document.getElementById("sound-one").style.animationPlayState = "running"
    setTimeout(secondNote, 1600)
}
/**
 * plays the 2nd note (random)
 */
function secondNote() {
    let randomNumber = Math.floor(Math.random() * 7);
    let audio = new Audio(sounds[randomNumber].sample);
    document.getElementById("sound-one").style.animationPlayState = "paused"
    document.getElementById("sound-two").style.animationPlayState = "running"
    audio.play();
    interval = randomNumber;
    console.log(randomNumber)
    setTimeout(answer, 500)
}
/**
 * adds eventlisteners to each button and changes the value of guess to the datavalue of the button clicked
 */

function answer() {
    document.getElementById("sound-two").style.animationPlayState = "paused"

    let answerButtons = document.getElementsByClassName("answer-buttons");
    for (button of answerButtons) {
        button.addEventListener("click", storeAnswer)
    }
}
/**
 * stores answer in variable
 */

function storeAnswer(event) {
    guess = event.target.dataset.answer
    checkAnswer()
}
/**
 * checks if interval and guess are the same and increase score wrong/right
 */
function checkAnswer() {

    if (interval == guess) {
        console.log("right Answer")
        let rightAnswers = document.getElementById("right-answers-value").innerText;
        document.getElementById("right-answers-value").innerText = ++rightAnswers



        let hearts = document.getElementsByClassName("hearts");
        for (heart of hearts) {
            heart.style.animationPlayState = "running";    
        }
        setTimeout(stopAnimation, 690)
        function stopAnimation(){
            console.log("poop")
            for (heart of hearts) {
                heart.style.animationPlayState = "paused";   
        }
    }
    startGame()

    } else {

        document.getElementById("modal-container").style.display = "flex";
        let correctAnswer = sounds[interval].interval;

        let userAnswer = sounds[guess].interval;


        let wrongAnswers = document.getElementById("wrong-answers-value").innerText;
        document.getElementById("wrong-answers-value").innerText = ++wrongAnswers

        document.getElementById("modal-content").innerHTML = `<h2>Ooops!</h2> You answered ${userAnswer}. The correct answer was ${correctAnswer}.<br><br><button id="ok">OK!</button>`;
        let okButton = document.getElementById("ok");
        okButton.addEventListener("click", startGame)

    }

}
/**
 * reset values
 */
function reset() {
    console.log("reset")
    document.getElementById("question-number-value").innerHTML = 0;
    document.getElementById("right-answers-value").innerHTML = 0;
    document.getElementById("wrong-answers-value").innerHTML = 0;
    runGame()
}
/**
 * Event Listeners
 */
let start = document.getElementById("start-game-button");
start.addEventListener("click", startGame);
let restartGame = document.getElementById("restart-game-button")
restartGame.addEventListener("click", reset);


// Maybe add funnction that i can play the notes again if i click them?