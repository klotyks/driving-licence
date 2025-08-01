const drivingLicenceAnswers = [
  {
    answer: 'call someone',
    isCorrect: false,
  },
  {
    answer: 'to stop',
    isCorrect: true,
  },
  {
    answer: 'fall asleep',
    isCorrect: false,
  },
  {
    answer: 'to ignore',
    isCorrect: false,
  },
]

function trueAnswer(obj) {
  const trueAnswer = { answer: obj.answer }
  if (obj.answer === 'to stop') {
    trueAnswer.isCorrect = true
  } else {
    trueAnswer.isCorrect = false
  }
  return trueAnswer
}

const result = trueAnswer({ answer: 'to stop' })
result

// function trueAnswer(drivingLicenceAnswers, smth) {
//   const trueResult = []
//   for (const d of drivingLicenceAnswers) if (smth(d)) trueResult.push(d)
//   return trueResult
// }
