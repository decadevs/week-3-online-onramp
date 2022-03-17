function transpose(arr) {
  const result = []

  for (let row = 0; row < arr.length; row++) {
    for (let column = 0; column < arr[row].length; column++) {
      if(!result[column]) result[column] = []
      result[column][row] = arr[row][column]
    }
  }

  return result
}

module.exports = transpose
