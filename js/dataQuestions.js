const allQuestions = [
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
    question: 'Какова максимальная скорость в городе? ?',
    answers: ['50 km/h', '390 km/h', '100 km/h', '8 km/h'],
    correct: '50 km/h',
    cost: 3,
  },
]

const askedQuestions = []

const answeredQuestions = []

let idx = 0

function randomQuestionIdx() {
  return Math.floor(Math.random() * allQuestions.length)
}

console.log(randomQuestionIdx())

function askQuestion() {
  const question = allQuestions[idx].question
  const answers = allQuestions[idx].answers

  askedQuestions.push(idx)
}

function giveAnswer(answer) {
  const answerObject = {
    questionIdx: idx,
    selectedAnswer: answer,
  }
  answeredQuestions.push(answerObject)
}

askQuestion()

giveAnswer('Притормозить')

function checkAnswers() {
  let sumCost = 0
  answeredQuestions.forEach(answeredQuestion => {
    const userAnswer = answeredQuestion.selectedAnswer
    const correctAnswer = allQuestions[answeredQuestion.questionIdx].correct
    const costAnswer = allQuestions[answeredQuestion.questionIdx].cost

    if (userAnswer === correctAnswer) {
      sumCost += costAnswer
    }
  })
  sumCost
}

checkAnswers()
