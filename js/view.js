function renderQuestion(question) {
  const elQuestion = document.querySelector('.question')
  elQuestion.textContent = question
}

function renderAnswers(answers) {
  const elAnswerA = document.querySelector('#answerA')
  const elAnswerB = document.querySelector('#answerB')
  const elAnswerC = document.querySelector('#answerC')
  const elAnswerD = document.querySelector('#answerD')

  elAnswerA.textContent = answers[0]
  elAnswerB.textContent = answers[1]
  elAnswerC.textContent = answers[2]
  elAnswerD.textContent = answers[3]
}

function renderQuiz(quiz) {
  renderQuestion(quiz.question)
  renderAnswers(quiz.answers)
}

function onClickButtonSelect() {
  const selectedRadio = document.querySelector('input[name="answer"]:checked')
  if (selectedRadio) {
    const span = selectedRadio.parentElement.querySelector('span')
    if (span) {
      handleGiveAnswer(span.textContent)
    }
  }
}

function onClickButtonSelectNextQuiz() {
  handleAskNextQuestion()
}

const elButton = document.querySelector('#select')
elButton.onclick = onClickButtonSelect

const elButtonNextQuiz = document.querySelector('#next-question')
elButtonNextQuiz.onclick = onClickButtonSelectNextQuiz
