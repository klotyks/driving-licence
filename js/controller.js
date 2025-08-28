function handleAskNextQuestion() {
  askQuestion()
  renderQuiz(currentQuiz)
}

function handleGiveAnswer(answer) {
  giveAnswer(answer)
}

function handleStartQuiz() {
  askQuestion()
  renderQuiz(currentQuiz)
}
