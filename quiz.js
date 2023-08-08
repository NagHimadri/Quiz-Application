const data = [
    {
      id: 1,
      question: "Who is the father of C language?",
      answers: [
        { answer: "Dennis Ritchie", isCorrect: true },
        { answer: "Steve Jobs", isCorrect: false },
        { answer: "James Gosling", isCorrect: false },
        { answer: "Rasmus Lerdorf", isCorrect: false },
      ],
    },
    {
      id: 2,
      question: "Which is used to compile, debug and execute java programs?",
      answers: [
        { answer: "JRE", isCorrect: false },
        { answer: "JIT", isCorrect: false },
        { answer: "JDK", isCorrect: true },
        { answer: "JVM", isCorrect: false },
      ],
    },
    {
      id: 3,
      question: "ArrayIndexOutOfBoundsException occurs?",
      answers: [
        { answer: "Compile-time", isCorrect: false },
        { answer: "Run-time", isCorrect: true },
        { answer: "Not an error", isCorrect: false },
        { answer: "Not an exception at all", isCorrect: false },
      ],
    },
  ];

const gameScreen = document.querySelector(".game")
const resultScreen = document.querySelector(".result")
const question = document.querySelector(".question")
const answerContainer = document.querySelector(".answers")
const submit = document.querySelector(".submit")
const play = document.querySelector(".play")

let qIndex = 0;
let correctCount = 0;
let wrongCount = 0;
let selectedAnswer;

const playAgain = () => {
  qIndex=0
  correctCount=0
  wrongCount=0
  total=0
  showQuestion(qIndex)
}

play.addEventListener("click",() => {
  resultScreen.style.display="none"
  gameScreen.style.display="block"
  playAgain()
})

const showResult = () => {
  resultScreen.style.display="block"
  gameScreen.style.display="none"

  resultScreen.querySelector(".correct").textContent = `Correct Answers: ${correctCount}`

  resultScreen.querySelector(".wrong").textContent = `Wrong Answers: ${wrongCount}`

  resultScreen.querySelector(".score").textContent = `Score: ${(correctCount - wrongCount) * 10}`
}

const showQuestion = (qNumber) =>{
    if(qIndex === data.length) return showResult();
    selectedAnswer=null;
    question.textContent = data[qNumber].question;
    answerContainer.innerHTML = data[qNumber].answers.map((item,index) => `<div class="answer">
    <input name="answer" type="radio" id=${index} value=${item.isCorrect}>
    <label for="1">${item.answer}</label>
</div>`).join("")
selectAnswer()
}

const selectAnswer = () => {
  answerContainer.querySelectorAll("input").forEach((el) => {
    el.addEventListener("click",(e) => {
      selectedAnswer = e.target.value;
    })
  })
}

const submitAnswer = () => {
  submit.addEventListener("click",() => {
    if(selectedAnswer !== null)
    {
      selectedAnswer === "true" ? correctCount++ : wrongCount++
      qIndex++;
      showQuestion(qIndex)
    }
    else
    {
      alert("Choose an answer first !!")
    }
  })
}

showQuestion(qIndex);
submitAnswer();
