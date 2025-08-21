const quizes = [
  {
    question: 'Что делать если бабулька переходи дорогу ?',
    answers: [
      'Включить музыку погромче',
      'Проверить смски',
      'Притормозить',
      'Накричать на бабульку',
    ],
    correct: 'Притормозить',
    cost: 1,
  },
  {
    question: 'На какой цвет переходить дорогу?',
    answers: ['желтый', 'черный', 'красный', 'зеленый'],
    correct: 'зеленый',
    cost: 5,
  },
  {
    question: 'Какова максимальная скорость в городе?',
    answers: ['50 km/h', '390 km/h', '100 km/h', '8 km/h'],
    correct: '50 km/h',
    cost: 3,
  },
]

let currentQuiz
let askedQuestionsIdxs = []
let answeredQuestions = []
let currentQuizIdx = randomQuestionIdx()

function randomQuestionIdx() {
  return Math.floor(Math.random() * quizes.length)
}

function askQuestion() {
  if (askedQuestionsIdxs.length >= 2) return false
  while (askedQuestionsIdxs.includes(currentQuizIdx)) {
    currentQuizIdx = randomQuestionIdx()
  }
  currentQuiz = quizes[currentQuizIdx]
  askedQuestionsIdxs.push(currentQuizIdx)
  return true
}

function giveAnswer(answer) {
  const answerObject = {
    questionIdx: currentQuizIdx,
    selectedAnswer: answer,
  }
  answeredQuestions.push(answerObject)
}

function checkAnswers() {
  let sumCost = 0
  answeredQuestions.forEach(answeredQuestion => {
    const userAnswer = answeredQuestion.selectedAnswer
    const correctAnswer = quizes[answeredQuestion.questionIdx].correct
    const costAnswer = quizes[answeredQuestion.questionIdx].cost

    if (userAnswer === correctAnswer) {
      sumCost += costAnswer
    }
  })
  // sumCost
}

// function askQuestion() {
//   currentQuiz = quizes[idx]
//   askedQuestions.push(idx)
// }

// askQuestion()
// console.log(currentQuizIdx)
// askQuestion()
// console.log(currentQuizIdx)
// askQuestion()
// console.log(currentQuizIdx)
// askQuestion()
// console.log(currentQuizIdx)
// askQuestion()
// console.log(currentQuizIdx)
// askQuestion()
// console.log(currentQuizIdx)
