const romanToDecimal = require('./challenge-1')
const transpose = require('./challenge-2')
const binaryReversal = require('./challenge-3')
const listSorting = require('./challenge-4')
const morseToText = require('./challenge-5')

describe('Challenge 1 Tests', () => {
  test('It passes the basics', () => {
    expect(romanToDecimal('I')).toBe(1)
    expect(romanToDecimal('V')).toBe(5)
    expect(romanToDecimal('X')).toBe(10)
    expect(romanToDecimal('L')).toBe(50)
    expect(romanToDecimal('C')).toBe(100)
    expect(romanToDecimal('D')).toBe(500)
    expect(romanToDecimal('M')).toBe(1000)
  })

  test('Single - multiple characters', () => {
    expect(romanToDecimal('II')).toBe(2)
    expect(romanToDecimal('XX')).toBe(20)
    expect(romanToDecimal('CC')).toBe(200)
    expect(romanToDecimal('MM')).toBe(2000)
  })

  test('Deductions with I', () => {
    expect(romanToDecimal('IV')).toBe(4)
    expect(romanToDecimal('IX')).toBe(9)
  })

  test('Additions with I', () => {
    expect(romanToDecimal('III')).toBe(3)
    expect(romanToDecimal('VI')).toBe(6)
    expect(romanToDecimal('VII')).toBe(7)
    expect(romanToDecimal('VIII')).toBe(8)
    expect(romanToDecimal('CI')).toBe(101)
    expect(romanToDecimal('CIII')).toBe(103)
    expect(romanToDecimal('DI')).toBe(501)
    expect(romanToDecimal('DII')).toBe(502)
    expect(romanToDecimal('MI')).toBe(1001)
    expect(romanToDecimal('MIV')).toBe(1004)
  })

  test('Deductions with X', () => {
    expect(romanToDecimal('XL')).toBe(40)
    expect(romanToDecimal('XC')).toBe(90)
  })

  test('Additions with X', () => {
    expect(romanToDecimal('LXX')).toBe(70)
    expect(romanToDecimal('CX')).toBe(110)
    expect(romanToDecimal('DXL')).toBe(540)
    expect(romanToDecimal('MXXX')).toBe(1030)
  })

  test('Numbers below 100', () => {
    expect(romanToDecimal('XXIX')).toBe(29)
    expect(romanToDecimal('XXXIII')).toBe(33)
    expect(romanToDecimal('XLVII')).toBe(47)
    expect(romanToDecimal('LIV')).toBe(54)
    expect(romanToDecimal('LXIX')).toBe(69)
    expect(romanToDecimal('LXX')).toBe(70)
    expect(romanToDecimal('LXXXVI')).toBe(86)
    expect(romanToDecimal('XCIV')).toBe(94)
  })

  test('Numbers below 1000', () => {
    expect(romanToDecimal('CXLIV')).toBe(144)
    expect(romanToDecimal('CLXVIII')).toBe(168)
    expect(romanToDecimal('CXCIV')).toBe(194)
    expect(romanToDecimal('CXCV')).toBe(195)
    expect(romanToDecimal('CCCLV')).toBe(355)
    expect(romanToDecimal('CDLX')).toBe(460)
    expect(romanToDecimal('DLX')).toBe(560)
    expect(romanToDecimal('DCLXIV')).toBe(664)
    expect(romanToDecimal('DCCXCIX')).toBe(799)
    expect(romanToDecimal('DCCCXLVIII')).toBe(848)
    expect(romanToDecimal('CMXCI')).toBe(991)
  })

  test('Large numbers', () => {
    expect(romanToDecimal('MDXC')).toBe(1590)
    expect(romanToDecimal('MMCDXLVIII')).toBe(2448)
    expect(romanToDecimal('MMMDCCXXIV')).toBe(3724)
    expect(romanToDecimal('MMMCMXCIX')).toBe(3999)
  })
})

describe('Challenge 2 Tests', () => {
  test('Testing with 2x2 array', () => {
    const arr = [
      [1, 2],
      [3, 4]
    ]

    expect(transpose(arr)).toEqual([
      [1, 3],
      [2, 4]
    ])
  })

  test('Testing with 3x2 array', () => {
    const arr = [
      [1, 7, 9],
      [2, 3, 5]
    ]

    expect(transpose(arr)).toEqual([
      [1, 2],
      [7, 3],
      [9, 5]
    ])
  })

  test('Testing with 4x4 array', () => {
    const array = [
      [9, 1, 2, 3],
      [4, 5, 6, 7],
      [8, 9, 10, 7],
      [1, 3, 1, 5]
    ]

    expect(transpose(array)).toEqual([
      [9, 4, 8, 1],
      [1, 5, 9, 3],
      [2, 6, 10, 1],
      [3, 7, 7, 5]
    ])
  })

  test('Testing with 5x1 array', () => {
    const array = [[1, 2, 3, 4, 5]]

    expect(transpose(array)).toEqual([[1], [2], [3], [4], [5]])
  })

  test('Testing with 5x3 array', () => {
    const array = [
      [5, 12, 17, 9, 3],
      [13, 4, 8, 14, 1],
      [9, 6, 3, 7, 21]
    ]

    expect(transpose(array)).toEqual([
      [5, 13, 9],
      [12, 4, 6],
      [17, 8, 3],
      [9, 14, 7],
      [3, 1, 21]
    ])
  })

  test('Testing with 6x6 array', () => {
    const array = [
      [-7, 12, 13, 0, 17, 21],
      [-1, 5, -2, 9, 11, 2],
      [5, -3, 12, 15, 13, 4],
      [9, 22, 13, 35, 1, 24],
      [11, 15, 4, 1, 8, -5],
      [2, 30, -4, 24, -5, 16]
    ]

    expect(transpose(array)).toEqual([
      [-7, -1, 5, 9, 11, 2],
      [12, 5, -3, 22, 15, 30],
      [13, -2, 12, 13, 4, -4],
      [0, 9, 15, 35, 1, 24],
      [17, 11, 13, 1, 8, -5],
      [21, 2, 4, 24, -5, 16]
    ])
  })

  test('Testing with 9x9 array', () => {
    const array = [
      [1, 2, 3, 4, 5, 6, 7, 8, 9],
      [11, 22, 33, 44, 55, 66, 77, 88, 99],
      [2, 4, 6, 8, 10, 12, 14, 16, 18],
      [1, 3, 5, 7, 9, 11, 13, 15, 17],
      [1, 1, 2, 3, 5, 8, 13, 21, 34],
      [2, 3, 5, 7, 11, 13, 17, 19, 23],
      [1, 4, 9, 16, 25, 36, 49, 64, 81],
      [3, 1, 4, 1, 5, 9, 2, 6, 5],
      [2, 7, 1, 8, 2, 8, 1, 8, 2]
    ]

    expect(transpose(array)).toEqual([
      [1, 11, 2, 1, 1, 2, 1, 3, 2],
      [2, 22, 4, 3, 1, 3, 4, 1, 7],
      [3, 33, 6, 5, 2, 5, 9, 4, 1],
      [4, 44, 8, 7, 3, 7, 16, 1, 8],
      [5, 55, 10, 9, 5, 11, 25, 5, 2],
      [6, 66, 12, 11, 8, 13, 36, 9, 8],
      [7, 77, 14, 13, 13, 17, 49, 2, 1],
      [8, 88, 16, 15, 21, 19, 64, 6, 8],
      [9, 99, 18, 17, 34, 23, 81, 5, 2]
    ])
  })
})

describe('Challenge 3 Tests', () => {
  test('It passes the basics', () => {
    expect(binaryReversal('1')).toBe('128')
    expect(binaryReversal('10')).toBe('80')
    expect(binaryReversal('45')).toBe('180')
    expect(binaryReversal('100')).toBe('38')
    expect(binaryReversal('111')).toBe('246')
    expect(binaryReversal('121')).toBe('158')
    expect(binaryReversal('200')).toBe('19')
  })
})

describe('Challenge 4 Tests', () => {
  test('1 indexed', () => {
    expect(listSorting(5, [1, 2, 3, 4, 5])).toBe(4)
    expect(listSorting(5, [1, 2, 3, 4, 4, 4])).toBe(-1)
    expect(listSorting(5, [5, 1, 2, 3, 4, 5])).toBe(5)
    expect(listSorting(0, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])).toBe(11)
    expect(listSorting(-1, [-1, 0, 10, 10, 10, 1, 1, 1, 1, 1, 1])).toBe(0)
    expect(listSorting(2, [2])).toBe(0)
    expect(listSorting(1, [])).toBe(-1)
    expect(listSorting(3, [-1, 0, 1, 2, 3])).toBe(4)
    expect(
      listSorting(
        4,
        [
          4, 0, 4, 2, 4, 5, 4, 8, 4, 3, 4, 1, 4, 2, 4, 2, 4, 5, 6, 4, 3, 4, 5,
          4, 5, 3, 1, 3, 6, 8, 3, 3, 2, 1, 1, 1, 1, 10, 9, 8
        ]
      )
    ).toBe(23)
  })

  test('2x2', () => {
    expect(listSorting(1, [[], []])).toBe(-1)
    expect(listSorting(0, [[0], [1]])).toEqual([0, 0])
    expect(
      listSorting(2, [
        [2, 2, 2, 2, 2, 2, 2],
        [1, 2]
      ])
    ).toEqual([1, 1])
    expect(
      listSorting(9, [
        [
          2, 1, 2, 0, 4, 5, 4, 5, 6, 7, 8, 8, 1, 2, 1, 0, 2, 3, 4, 1, 3, 3, 1,
          3, 4, 7, 8, 2
        ],
        [1, 2, 3, 4, 4, 5, 6, 7, 8, 8, 9, 0, 1, 2]
      ])
    ).toEqual([1, 10])
  })

  test('Multidimensional', () => {
    expect(listSorting(1000, [[], [], [], []])).toBe(-1)
    expect(listSorting(1000, [[1000], [0], [1000], [0]])).toEqual([2, 0])
    expect(
      listSorting(200, [
        [100, 200, 300],
        [300, 200, 100],
        [300, 100, 200],
        [200, 100, 300],
        [100, 200, 300]
      ])
    ).toEqual([4, 1])
  })

  test('Uneven', () => {
    expect(
      listSorting(1, [
        [1],
        [2, 1],
        [3, 1, 2],
        [1, 2, 3, 4],
        [5, 3, 4, 2, 1],
        [0, 0, 0, 0, 0]
      ])
    ).toEqual([4, 4])
    expect(
      listSorting(20, [
        [2],
        [2000, 200, 20000],
        [200, 20],
        [200, 200, 200, 200, 200, 200, 200, 200, 200, 200],
        [200, 200, 200, 200, 200],
        [200, 200, 200, 200, 200, 200]
      ])
    ).toEqual([2, 1])
    expect(
      listSorting(1, [
        [2],
        [2000, 200, 20000],
        [200, 20],
        [200, 200, 200, 200, 200, 200, 200, 200, 200, 200],
        [200, 200, 200, 200, 200],
        [200, 200, 200, 200, 200, 200]
      ])
    ).toBe(-1)
    expect(
      listSorting(10, [
        [1, 2],
        [1],
        [10],
        [1, 2],
        [1, 2, 3, 4, 5],
        [1, 2, 3, 4],
        [1, 2, 3, 4, 5, 6, 7],
        [1, 2, 3, 4, 5, 6],
        [0]
      ])
    ).toEqual([2, 0])
  })
})

describe('Challenge 5 Tests', () => {
  test('it returns an empty string untouched', () => {
    expect(morseToText('')).toBe('')
  })

  test('it bails given invalid data', () => {
    expect(() => morseToText()).toThrow()
    expect(() => morseToText([])).toThrowError('Please provide a morse string')
  })

  test('it decodes single letters and words', () => {
    expect(morseToText('.-')).toBe('A')
    expect(morseToText('.')).toBe('E')
    expect(morseToText('..')).toBe('I')
    expect(morseToText('...---...')).toBe('SOS')
  })

  test('it decodes letters with spaces', () => {
    expect(morseToText('. .')).toBe('EE')
    expect(morseToText('.   .')).toBe('E E')
    expect(morseToText('... --- ...')).toBe('SOS')
    expect(morseToText('...   ---   ...')).toBe('S O S')
    expect(morseToText('-.. . -.-. .-   -.. . ...-')).toBe('DECA DEV')
  })

  test('It decodes special characters', () => {
    expect(
      morseToText(
        '...-..- ..... .-.-.- ----- --...   .--. . .-.    -... --- - - .-.. .'
      )
    ).toBe('$5.07 PER BOTTLE')

    expect(morseToText('..- .-... ..')).toBe('U&I')
  })

  test('it decodes letters with multiple spaces', () => {
    expect(morseToText(' . ')).toBe('E')
    expect(morseToText('   .   . ')).toBe('E E')
    expect(
      morseToText(
        '      ...---... -.-.--   - .... .   --.- ..- .. -.-. -.-   -... .-. --- .-- -.   ..-. --- -..-   .--- ..- -- .--. ...   --- ...- . .-.   - .... .   .-.. .- --.. -.--   -.. --- --. .-.-.-     '
      )
    ).toBe('SOS! THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.')
  })
})
