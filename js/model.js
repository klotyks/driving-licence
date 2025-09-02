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
  {
    question:
      'Какой минимальный возраст для получения водительского удостоверения в Японии для легковых автомобилей?',
    answers: ['16', '17', '18', '19'],
    correct: '18',
    cost: 2,
  },
  {
    question:
      'Какой тест обязателен для получения водительских прав в Великобритании?',
    answers: [
      'Только теоретический тест',
      'Теоретический и практический тесты',
      'Только практический тест',
      'Тест на знание механики автомобиля',
    ],
    correct: 'Теоретический и практический тесты',
    cost: 2,
  },
  {
    question:
      'Какой документ чаще всего требуется для продления водительских прав в Австралии?',
    answers: [
      'Справка о прохождении полного медицинского осмотра',
      'Подтверждение адреса проживания',
      'Копия паспорта',
      'Справка из автошколы',
    ],
    correct: 'Подтверждение адреса проживания',
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
  if (askedQuestionsIdxs.length >= 5) return false
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
  return sumCost
  // sumCost
}

askQuestion()
askedQuestionsIdxs
answeredQuestions
giveAnswer(currentQuiz.correct)
askedQuestionsIdxs
answeredQuestions

console.log(checkAnswers())

console.log(' !' === '!')
