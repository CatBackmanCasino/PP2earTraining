document.getElementById("start-button").addEventListener("click", runGame);
document.getElementById("snare").addEventListener("click", guessSnare);
document.getElementById("clap").addEventListener("click", guessClap);


let snare = new Audio('assets/media/snare.mp3')
let clap = new Audio('assets/media/clap.mp3')
let instrumentPlayed = "";
let playerGuess = "";

/**
 * plays base note plus any other note.
 */
function runGame() {
    let questionNumber = document.getElementById("question-number-value").innerText;
    if(questionNumber <= 10){
        document.getElementById("question-number-value").innerText = ++questionNumber;
    } else {
        alert("Level Complete");
    }    
    firstNote()
}



/**
 * this function playes the base note and waits for 2000ms to start
 */
function firstNote() {
    snare.play()
    const myTimeout = setTimeout(secondNote, 2000);
}

function secondNote() {
    let randomNumber = Math.floor(Math.random() * 2);
    if (randomNumber === 0){
    snare.play();
    instrumentPlayed = "snare";
    } else {
    clap.play() 
    instrumentPlayed = "clap";
    }
    console.log(instrumentPlayed);
   
}


function guessSnare(){
    playerGuess = "snare";
    checkAnswer()
    }

function guessClap(){
    playerGuess = "clap";
    checkAnswer()
}

function checkAnswer(){
    if (instrumentPlayed === playerGuess){
        alert("right answer");
        runGame();
    } else {
        alert("uh oh, wrong answer")
        runGame();
    }

}