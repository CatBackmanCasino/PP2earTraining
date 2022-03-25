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
    document.getElementById("modal-content").innerHTML = `<h1>Hi, and welcome to earTrainer 1</h1><p><br>This game is made to teach you how to hear intervals in music.<br>You will hear two notes and your job is to guess what the 2nd note is relative to the first one<br>Is it a 3rd or maybe a 7th?<br>Just press the interval you think is the right one.<br>Good Luck<br><p>
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

        document.getElementById("modal-container").style.display = "flex";
        let score = document.getElementById("right-answers-value").innerText;
        document.getElementById("modal-content").innerHTML = `<p>God job! your score: ${(score)}. <br>Do you want to play again?</p><button id="yes">Yes</button>`
        let yes = document.getElementById("yes");
        yes.addEventListener("click", reset)
    }
}

/**
 * plays the first note
 */

function firstNote() {
    let audio = new Audio(sounds[0].sample)
    audio.play();
    setTimeout(secondNote, 1500)
}

/**
 * plays the 2nd note (random)
 */

function secondNote() {
    let randomNumber = Math.floor(Math.random() * 7);
    let audio = new Audio(sounds[randomNumber].sample);
    audio.play();
    interval = randomNumber;
    answer()
    console.log(randomNumber)
}

/**
 * adds eventlisteners to each button and changes the value of guess to the datavalue of the button clicked
 */

function answer() {
    
    buttons = document.getElementsByClassName("buttons");
    for (let button in buttons) {
        addEventListener("click", storeAnswer)

    }
}

/**
 * stores answer in variable
 * 
 * 
 */

function storeAnswer(event){
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
    } else { 

    document.getElementById("modal-container").style.display = "flex";
    document.getElementById("modal-content").innerHTML = `Noooo wrong answer!!<button id="ok">OK</button>`

    console.log("wrong")
    let wrongAnswers = document.getElementById("wrong-answers-value").innerText;
    document.getElementById("wrong-answers-value").innerText = ++wrongAnswers
    }
    startGame()
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