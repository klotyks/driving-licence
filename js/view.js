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

function onClickButtonConfirm() {
  const selectedRadio = document.querySelector('input[name="answer"]:checked')
  if (selectedRadio) {
    const span = selectedRadio.parentElement.querySelector('span')
    if (span) {
      handleAskNextQuestion()
      handleGiveAnswer(span.textContent)
    }
  }

}

function renderQuizResult (answered,points) {
  const elQuizResult = document.querySelector('.quiz-result')
  const elAnsweredQuestions = document.querySelector('.answered-questions')
  const elPoints = document.querySelector('.points')

  elQuizResult.style = 'display: block;'
  elAnsweredQuestions.textContent = answered
  elPoints.textContent = points
}

function onClickButtonStartQuiz() {
  const nonStartQuizButton = document.querySelector('#elButtonStartQuiz')
  if (nonStartQuizButton) {
    nonStartQuizButton.classList.add('none-display')
    nonStartQuizButton.removeAttribute('id')
  }
  const elMain = document.querySelector('#display')
  if (elMain) {
    elMain.classList.add('main-display')
    elMain.removeAttribute('id')
  }
  handleStartQuiz()
}

const elButton = document.querySelector('#select')
elButton.onclick = onClickButtonConfirm

const elButtonStartQuiz = document.querySelector('#elButtonStartQuiz')
elButtonStartQuiz.onclick = onClickButtonStartQuiz
