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
]

const askedQuestions = []

const answeredQuestions = []

let idx = 0

function askQuestion() {
  const question = allQuestions[idx].question
  const answers = allQuestions[idx].answers
  askedQuestions.push(idx)

  // console.log('=====')
  // console.log('Вопрос:')
  // console.log(question)
  // console.log('Варианты ответа:')
  // answers.forEach(answer => {
  //   console.log('-', answer)
  // })
  // console.log('=====')
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

allQuestions
askedQuestions
answeredQuestions

function checkAnswers() {
  let sumCost = 0
  answeredQuestions
  answeredQuestions.forEach(answeredQuestion => {
    answeredQuestion

    const userAnswer = answeredQuestion.selectedAnswer
    const correctAnswer = allQuestions[answeredQuestion.questionIdx].correct
    const costAnswer = allQuestions[answeredQuestion.questionIdx].cost

    console.log(userAnswer)
    console.log(correctAnswer)

    console.log(userAnswer === correctAnswer)

    if (userAnswer === correctAnswer) {
      sumCost += costAnswer
    }
  })
  sumCost
}

checkAnswers()
