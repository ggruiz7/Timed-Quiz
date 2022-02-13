var timeEl = document.querySelector(".time")
var startButtonEl = document.querySelector(".start-button")
var answersContainerEl = document.querySelector(".choice-container");
var boxContainerEl = document.querySelector(".box-container");
var startContainerEl = document.querySelector(".start-container")
var questionTextEl = document.querySelector("#question");

var choice1 = document.getElementById('choice1')
var choice2 = document.getElementById('choice2')
var choice3 = document.getElementById('choice3')
var choice4 = document.getElementById('choice4')
var storeContainerEl = document.getElementById('score-container')

var questions = [{
        question: "Rea·gan·om·ics, also known as:",
        choice1: "Chaos Theory",
        choice2: "The Cobb Douglas Function",
        choice3: "Trickle Down Economic Theory",
        choice4: "AD-AS Model",
        correct: "C",
    },
    {
        question: "When finding the solution to a heat equation, given, generally, the first step is: ",
        choice1: "Seperation of Variables",
        choice2: "Make into the form of a 'X'-Equation",
        choice3: "Find the Eigenvalues",
        choice4: "Make into the form of a 'T'-Equation",
        correct: "A",
    },

    {
        question: "Which of these is the oldest contiguous rainforest in the world?",
        choice1: "Congo, central Africa",
        choice2: "Daintree, north-east Australia",
        choice3: "Yakushima, southern Japan",
        choice4: "Amazon, nothern South America",
        correct: "B",
    },
    {
        question: "Who were the Sea Peoples mentioned in late Bronze-Age history?",
        choice1: "A horde of peoples, who destroyed much of civilization",
        choice2: "Climate refugees",
        choice3: "Sea Monsters",
        choice4: "Both A & B",
        correct: "D",
    },
    {
        question: "Which of these is the largest lake in the world?",
        choice1: "Lake Victoira, central-east Africa",
        choice2: "Lake Superior, central North America",
        choice3: "Caspian Sea, central Asia",
        choice4: "Lake Michigan, central North America",
        correct: "C",
    },
    {
        question: "2 + 2: ",
        choice1: "1",
        choice2: "2",
        choice3: "3",
        choice4: "4",
        correct: "B",
    },
]

var secondsLeft = 50;
var score = 0;

answersContainerEl.style.display = 'none'
timeEl.style.display = 'none'
storeContainerEl.style.display = 'none'
var lastQuestionIndex = questions.length;
let currentQuestion = 0

// function to create questions
function makeQuestion() {
    console.log("makeQuestion", currentQuestion)
    console.log(choice1)
    q = questions[currentQuestion];
    questionTextEl.innerText = q.question;
    choice1.textContent = q.choice1;
    choice2.textContent = q.choice2;
    choice3.textContent = q.choice3;
    choice4.textContent = q.choice4;
    gameOver()
}

// start game function
function startQuiz() {
    startContainerEl.style.display = 'none'
    answersContainerEl.style.display = 'block'
    timeEl.style.display = 'block'
    setTime()
    makeQuestion()
}

// game over unction
function gameOver() {
    if (currentQuestion > 4) {
        answersContainerEl.style.display = 'none'
        clearInterval(setTime)
        timeEl.style.display = 'none'
        submit()
    }

    if (secondsLeft <= 0) {
        clearInterval(timerInterval);
        timeEl.style.display = 'none'
        answersContainerEl.style.display = 'none'
        submit()

    }
}

// check and validate or penalize answers 
function rightOrWrong(answer) {
    if (answer == questions[currentQuestion].correct) {
        score = score + 20

    } else {
        secondsLeft -= 5;

    }

    if (currentQuestion < lastQuestionIndex) {
        currentQuestion++
        makeQuestion()
    }

    console.log(score)
}

// time function
function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft;
    }, 1000);
    return;
}

// submit function 
function submit() {
    storeContainerEl.style.display = 'block'
    var scoreTextEl = document.getElementById('scoreText')
    scoreTextEl.innerText = "Your Score is " + score;
    var submitButtonEl = document.createElement('button')
    submitButtonEl.classList.add('submitButtonEl')
    submitButtonEl.innerHTML = "Submit"
    storeContainerEl.appendChild(submitButtonEl)

}

// add event listener
startButtonEl.addEventListener("click", startQuiz)