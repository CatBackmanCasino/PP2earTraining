document.getElementById("start-button").addEventListener("click", runGame);
document.getElementById("snare").addEventListener("click", guessSnare);
document.getElementById("clap").addEventListener("click", guessClap);

let snare = new Audio('assets/media/snare.mp3')
let clap = new Audio('assets/media/clap.mp3')

let c1 = new Audio('assets/media/c1.mp3')
let d1 = new Audio('assets/media/d1.mp3')
let e1 = new Audio('assets/media/e1.mp3')
let f1 = new Audio('assets/media/f1.mp3')
let g1 = new Audio('assets/media/g1.mp3')
let a1 = new Audio('assets/media/a1.mp3')
let b1 = new Audio('assets/media/b1.mp3')
let c2 = new Audio('assets/media/c2.mp3')
let d2 = new Audio('assets/media/d2.mp3')
let e2 = new Audio('assets/media/e2.mp3')
let f2 = new Audio('assets/media/f2.mp3')
let g2 = new Audio('assets/media/g2.mp3')
let a2 = new Audio('assets/media/a2.mp3')
let b2 = new Audio('assets/media/b2.mp3')
let c3 = new Audio('assets/media/c3.mp3')



let instrumentPlayed = "";
let playerGuess = "";
let rightAnswers = document.getElementById("right-answers-value").innerText;
let wrongAnswers = document.getElementById("wrong-answers-value").innerText;
let questionNumber = document.getElementById("question-number-value").innerText;
/**
 * plays base note plus any other note.
 */
function runGame() {
    if (questionNumber < 2) {
        document.getElementById("question-number-value").innerText = ++questionNumber;
        firstNote();
    } else {
        yourScore()
    }

}

/**
 * this function playes the base note and waits for 2000ms to start
 */
function firstNote() {

    c1.play()
    setTimeout(secondNote, 900);


}






/**
 * plays a second note and returns what instrument  was played to variable instruments played
 */
function secondNote() {

    let randomNumber = Math.floor(Math.random() * 6);
    if (randomNumber === 0) {
        c1.play();
        instrumentPlayed = "c1";
    }
    if (randomNumber === 1) {
        d1.play();
        instrumentPlayed = "d1";
    }
    if (randomNumber === 2) {
        e1.play();
        instrumentPlayed = "e1";
    }
    if (randomNumber === 3) {
        f1.play();
        instrumentPlayed = "f1";
    }
    if (randomNumber === 4) {
        g1.play();
        instrumentPlayed = "g1";
    }
    if (randomNumber === 5) {
        a1.play();
        instrumentPlayed = "a1";
    }
    if (randomNumber === 6) {
        b1.play();
        instrumentPlayed = "b1";
    } 

}


function guessSnare() {
    playerGuess = "snare";
    checkAnswer()
}

function guessClap() {
    playerGuess = "clap";
    checkAnswer()
}

function checkAnswer() {
    if (instrumentPlayed === playerGuess) {
        alert("right answer");
        document.getElementById("right-answers-value").innerText = ++rightAnswers;
    } else {
        alert("uh oh, wrong answer")
        document.getElementById("wrong-answers-value").innerText = ++wrongAnswers;
    }
    runGame()

}

function yourScore() {
    alert(`Good Job! your score: ${rightAnswers} / ${questionNumber}`)
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