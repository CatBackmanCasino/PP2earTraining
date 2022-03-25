document.addEventListener("DOMContentLoaded", runGame())

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
        interval: "second",
        sample: "assets/media/e1.mp3"
    },
    {
        note: "f1",
        interval: "second",
        sample: "assets/media/f1.mp3"
    },
    {
        note: "g1",
        interval: "second",
        sample: "assets/media/g1.mp3"
    },
    {
        note: "a1",
        interval: "second",
        sample: "assets/media/a1.mp3"
    },
    {
        note: "b1",
        interval: "second",
        sample: "assets/media/b1.mp3"
    },
    {
        note: "c2",
        interval: "second",
        sample: "assets/media/c2.mp3"
    }
]
let interval = 0;
let guess = "";

function runGame() {
    document.getElementById("modal-container").style.display = "flex";
    document.getElementById("modal-content").innerHTML = `<h1>Hi, and welcome to earTrainer 1</h1><p><br>This game is made to teach you how to hear intervals in music.<br>You will hear two notes and your job is to guess what the 2nd note is relative to the first one<br>Is it a 3rd or maybe a 7th?<br>Just press the interval you think is the right one.<br>Good Luck<br><p>
    <br><button id="start-game-button">Start Game</button>`



    function startGame() {
        document.getElementById("modal-container").style.display = "none";
        let questionNumber = document.getElementById("question-number-value").innerHTML;
        if (questionNumber < 1) {
            document.getElementById("question-number-value").innerHTML = ++questionNumber;
            setTimeout(firstNote, 500)
        } else {
            document.getElementById("modal-container").style.display = "flex";
            let score = document.getElementById("right-answers-value").innerHTML;
            document.getElementById("modal-content").innerHTML = `<p>God job! your score: ${score}. <br>Do you want to play again?</p>`
        }
    }

    function firstNote() {
        let audio = new Audio(sounds[0].sample)
        audio.play();
        setTimeout(secondNote, 2000)
    }

    function secondNote() {
        let randomNumber = Math.floor(Math.random() * 7);
        let audio = new Audio(sounds[randomNumber].sample);
        audio.play();
        interval = randomNumber;
        answer()
    }

    function answer(event) {
        let answerButtons = document.getElementsByClassName("answer-buttons");
        for (button of answerButtons) {
            button.addEventListener("click", test)
            guess = button
        }
    }

    function checkAnswer() {
        if (guess == interval + 1) {
            startGame()
            let rightAnswers = document.getElementById("right-answers-value").innerHTML;
            document.getElementById("right-answers-value").innerHTML = ++rightAnswers;
        } else {
            let wrongAnswers = document.getElementById("wrong-answers-value").innerHTML;
            document.getElementById("wrong-answers-value").innerHTML = ++wrongAnswers;
            document.getElementById("modal-container").style.display = "flex";
            document.getElementById("modal-content").innerHTML = `<p><br>Oops, the right answer was ${interval + 1}<button id="close">OK!</button>`;
        }

    }

    function reset() {
        document.getElementById("question-number-value").innerHTML = 0;
        document.getElementById("right-answers-value").innerHTML = 0;
        document.getElementById("wrong-answers-value").innerHTML = 0;
    }

    function test() {
        console.log(guess)
    }

    let start = document.getElementById("start-game-button");
    start.addEventListener("click", startGame);


}