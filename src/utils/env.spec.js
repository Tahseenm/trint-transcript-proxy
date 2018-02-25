import { isProduction, isDevelopment } from './env'


const setNodeEnv = nodeEnv => () => {
  process.env.NODE_ENV = nodeEnv
}

const setProd = setNodeEnv('production')
const setDev  = setNodeEnv('development')
const setTest = setNodeEnv('test')


describe('isProduction()', () => {
  afterEach(setTest)

  it('should return a boolean', () => {
    const expected = 'boolean'
    const actual = typeof isProduction()

    expect(actual).toEqual(expected)
  })

  it('should return true when node enviroment is Production', () => {
    setProd()
    const expected = true
    const actual = isProduction()

    expect(actual).toEqual(expected)
  })

  it('should return false when node enviroment is Test', () => {
    setTest()
    const expected = false
    const actual = isProduction()

    expect(actual).toEqual(expected)
  })

  it('should return true when node enviroment is Development', () => {
    setDev()
    const expected = false
    const actual = isProduction()

    expect(actual).toEqual(expected)
  })
})


describe('isDevelopment()', () => {
  afterEach(setTest)

  it('should return a boolean', () => {
    const expected = 'boolean'
    const actual = typeof isDevelopment()

    expect(actual).toEqual(expected)
  })

  it('should return true when node enviroment is Development', () => {
    setDev()
    const expected = true
    const actual = isDevelopment()

    expect(actual).toEqual(expected)
  })

  it('should return true when node enviroment is Test', () => {
    setTest()
    const expected = true
    const actual = isDevelopment()

    expect(actual).toEqual(expected)
  })

  it('should return false when node enviroment is Production', () => {
    setProd()
    const expected = false
    const actual = isDevelopment()

    expect(actual).toEqual(expected)
  })
})
