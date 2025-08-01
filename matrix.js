const matrix = [
  [1, 'Vasya', 'Vasilev', 21, 'male'],
  [2, 'Petya', 'Petrov', 18, 'male'],
  [3, 'Katya', 'Kateva', 19, 'female'],
]

matrix

for (const row of matrix) {
  row
  for (const col of row) {
    console.log(col)
  }
}

// id  firstName  secondName  age  gender
// 1   'Vasya'    'Vasilev'   21   'male'
// 2   'Petya'    'Petrov'    18   'male'
// 3   'Katya'    'Kateva'    19   'female'

const maze = [
  ['+', '.', '.', 'x', '.', '.', 'x', '.', '.'],
  ['.', 'x', '.', 'x', '.', '.', 'x', '.', '.'],
  ['.', 'x', '.', 'x', '.', '.', 'x', '.', '.'],
  ['.', 'x', '.', 'x', '.', '.', 'x', '.', '.'],
  ['.', 'x', '.', '.', '.', '.', 'x', '.', '.'],
  ['.', 'x', '.', 'x', '.', '.', 'x', '.', '.'],
  ['.', 'x', '.', 'x', '.', '.', 'x', '.', '.'],
  ['.', 'x', '.', 'x', '.', '.', 'x', '.', '.'],
  ['.', 'x', '.', 'x', '.', '.', 'x', '.', '.'],
  ['.', '.', '.', 'x', '.', '.', '.', '.', 'O'],
]
