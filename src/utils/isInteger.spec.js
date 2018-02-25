import isInteger from './isInteger'


describe('isInteger()', () => {
  it('should return a boolean', () => {
    const expected = 'boolean'
    const actual = typeof isInteger(10)

    expect(actual).toEqual(expected)
  })

  describe('Integer Inputs', () => {
    it('should return true for integer numbers', () => {
      const integers = [1, 33, 100]
      integers.forEach((integer) => {
        const expected = true
        const actual = isInteger(integer)

        expect(actual).toEqual(expected)
      })
    })

    it('should return true for integer string', () => {
      const integers = ['1', '33', '100']
      integers.forEach((integer) => {
        const expected = true
        const actual = isInteger(integer)

        expect(actual).toEqual(expected)
      })
    })
  })

  describe('Non Integer Inputs', () => {
    it('should return false', () => {
      const values = [
        undefined,
        null,
        false,
        NaN,
        0.55,
        3.25,
        '0.55',
        '3.25',
        '1g',
        '0.1g',
        Symbol('123'),
        /123/,
        {},
        [123],
      ]

      values.forEach((value) => {
        const expected = false
        const actual = isInteger(value)

        expect(actual).toEqual(expected)
      })
    })
  })
})
