document.getElementById("start-button").addEventListener("click", runGame);



let snare = new Audio('assets/media/snare.mp3')
let clap = new Audio('assets/media/clap.mp3')
/**
 * plays base note plus any other note.
 */
function runGame() {
    let questionNumber = document.getElementById("question-number-value").innerText;
    if(questionNumber < 20){
        document.getElementById("question-number-value").innerText = ++questionNumber;
    } else {
        alert("Level Complete");
    }    
    // console.log(questionNumber);
    firstNote()
}

function firstNote() {
    snare.play()
    const myTimeout = setTimeout(secondNote, 2000);
}

function secondNote() {
    let randomNumber = Math.floor(Math.random() * 2);
    console.log(randomNumber);
    if (randomNumber === 0){
    snare.play();
    } else {
    clap.play()   
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