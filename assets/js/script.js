document.getElementById("start-button").addEventListener("click", runGame);
document.getElementById("c1").addEventListener("click", guessC1);
document.getElementById("d1").addEventListener("click", guessD1);
document.getElementById("e1").addEventListener("click", guessE1);
document.getElementById("f1").addEventListener("click", guessF1);
document.getElementById("g1").addEventListener("click", guessG1);
document.getElementById("a1").addEventListener("click", guessA1);
document.getElementById("b1").addEventListener("click", guessB1);
document.getElementById("c2").addEventListener("click", guessC2);

let c1 = new Audio('assets/media/c1.mp3')
let d1 = new Audio('assets/media/d1.mp3')
let e1 = new Audio('assets/media/e1.mp3')
let f1 = new Audio('assets/media/f1.mp3')
let g1 = new Audio('assets/media/g1.mp3')
let a1 = new Audio('assets/media/a1.mp3')
let b1 = new Audio('assets/media/b1.mp3')
let c2 = new Audio('assets/media/c2.mp3')

let interval = "";
let playerGuess = "";
let rightAnswers = document.getElementById("right-answers-value").innerText;
let wrongAnswers = document.getElementById("wrong-answers-value").innerText;
let questionNumber = document.getElementById("question-number-value").innerText;

/**
 * plays base note plus any other note.
 */
function runGame() {
    document.getElementById("modal-container").style.display ="none";
    if (questionNumber < 10) {
        document.getElementById("question-number-value").innerText = ++questionNumber;
        firstNote();
    } else {
        yourScore()
    }

}

/**
 * this function playes the base note and waits for 1300ms to start
 */
function firstNote() {

    c1.play()
    setTimeout(secondNote, 1300);
}


/**
 * plays a second note and returns what instrument  was played to variable instruments played
 */
function secondNote() {

    let randomNumber = Math.floor(Math.random() * 8);
    if (randomNumber === 0) {
        c1.play();
        interval = "first";
    }
    if (randomNumber === 1) {
        d1.play();
        interval = "second";
    }
    if (randomNumber === 2) {
        e1.play();
        interval = "third";
    }
    if (randomNumber === 3) {
        f1.play();
        interval = "fourth";
    }
    if (randomNumber === 4) {
        g1.play();
        interval = "fifth";
    }
    if (randomNumber === 5) {
        a1.play();
        interval = "sixth";
    }
    if (randomNumber === 6) {
        b1.play();
        interval = "seventh";
    }
    if (randomNumber === 7) {
        c2.play();
        interval = "octave";
    }
    console.log(randomNumber);

}


function guessC1() {
    playerGuess = "first";
    checkAnswer()
}

function guessD1() {
    playerGuess = "second";
    checkAnswer()
}

function guessE1() {
    playerGuess = "third";
    checkAnswer()
}

function guessF1() {
    playerGuess = "fourth";
    checkAnswer()
}

function guessG1() {
    playerGuess = "fifth";
    checkAnswer()
}

function guessA1() {
    playerGuess = "sixth";
    checkAnswer()
}

function guessB1() {
    playerGuess = "seventh";
    checkAnswer()
}

function guessC2() {
    playerGuess = "octave";
    checkAnswer()
}

function checkAnswer() {
    if (interval === playerGuess) {
        document.getElementById("right-answers-value").innerText = ++rightAnswers;
    } else {
        document.getElementById("wrong-answers-value").innerText = ++wrongAnswers;
        alert(`you answered ${playerGuess}. The right answer was ${interval}`)
    }
    runGame()

}

function yourScore() {
    document.getElementById("modal-container").style.display ="flex";
    document.getElementById("modal-content").innerText = `Good Job! \n your score: ${rightAnswers} / ${questionNumber}`
    let playAgain = document.getElementById("play-again")
    playAgain.addEventListener("click", runGame)
    resetScore()
}

function resetScore() {
    document.getElementById("right-answers-value").innerText = "0";
    document.getElementById("wrong-answers-value").innerText = "0";
    document.getElementById("question-number-value").innerText = "0";
    rightAnswers = "0";
    wrongAnswers = "0";
    questionNumber = "0";

}