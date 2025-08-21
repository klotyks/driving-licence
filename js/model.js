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

let askedQuestions = []

const answeredQuestions = []

let idx = 0

function randomQuestionIdx() {
  return Math.floor(Math.random() * quizes.length)
}

idx = randomQuestionIdx()

console.log(randomQuestionIdx())

function askQuestion() {
  if (askedQuestions.length === quizes.length) {
    askedQuestions = [] // Сброс
  }
  while (askedQuestions.includes(idx)) {
    idx = Math.floor(Math.random() * quizes.length) // Новый уникальный индекс
  }
  askedQuestions.push(idx) // Добавляем индекс
  currentQuiz = quizes[idx] // Обновляем текущий вопрос
  console.log(currentQuiz)
}

// function askQuestion() {
//   currentQuiz = quizes[idx]
//   askedQuestions.push(idx)
// }

console.log(currentQuiz)
askQuestion()
console.log(currentQuiz)
currentQuiz

function giveAnswer(answer) {
  const answerObject = {
    questionIdx: idx,
    selectedAnswer: answer,
  }
  answeredQuestions.push(answerObject)
}

giveAnswer('')
// askQuestion()

// console.log(answeredQuestions)

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

checkAnswers()
