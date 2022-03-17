function romanToDecimal(roman) {
  let total = 0
  let index = 0
  let input = roman.toLowerCase()

  const converter = {
    i: 1,
    v: 5,
    x: 10,
    l: 50,
    c: 100,
    d: 500,
    m: 1000,
  }

  while (index < input.length) {
    let current = input[index]
    let next = input[index+1]

    if(converter[current] < converter[next]) {
      total += converter[next] - converter[current]
      index += 2
    } else {
      total += converter[current]
      index++
    }
  }

  return total
}

//  while (i < roman.length) {
//     let cur = roman[i]
//     let next = roman[i + 1]
//     if (converter[cur] < converter[next]) {
//       total += converter[next] - converter[cur]
//       i += 2
//     } else {
//       total += converter[cur]
//       i++
//     }
//   }

module.exports = romanToDecimal
