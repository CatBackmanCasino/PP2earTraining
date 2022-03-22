document.getElementById("start-button").addEventListener("click", runGame);



let snare = new Audio('assets/media/snare.mp3')
let clap = new Audio('assets/media/clap.mp3')
let sounds = [snare, clap]
/**
 * plays base note plus any other note.
 */
function runGame() {
    firstNote()

}

function firstNote() {
    snare.play()
    const myTimeout = setTimeout(secondNote, 2000);
}

function secondNote() {
    let randomNumber = Math.floor(Math.random() * 10);
    if (randomNumber >= 5) {
        snare.play();
    } else {
        clap.play();
    }
}



function checkAnswer() {


}

function incramentScore() {

}

function incramentQuestionNumber() {

}

function calculateEndScore() {

}