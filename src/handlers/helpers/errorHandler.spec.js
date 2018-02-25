import errorHandler from './errorHandler'


/** (string | Array<any>) -> any */
const first = ([x]) => x


describe('errorHandler()', () => {
  it('should return a handler function', () => {
    const expected = 'function'
    const actual = typeof errorHandler(jest.fn())

    expect(actual).toEqual(expected)
  })

  describe('Higher order Handler', () => {
    it('should pass the request express object to handler', () => {
      const mockHandler = jest.fn()
      const requestMock = {}
      const handler = errorHandler(mockHandler)

      /** Call handler like express */
      handler(requestMock, {}, jest.fn())

      /** First arg of first call */
      const expected = requestMock
      const actual = first(mockHandler.mock.calls[0])

      expect(actual).toEqual(expected)
    })

    it('should pass the response express object to handler', () => {
      const mockHandler = jest.fn()
      const responseMock = {}
      const handler = errorHandler(mockHandler)

      /** Call handler like express */
      handler({}, responseMock, jest.fn())

      /** Second arg of first call */
      const expected = responseMock
      const actual = mockHandler.mock.calls[0][1]

      expect(actual).toEqual(expected)
    })
  })

  it('should pass error to express error-handler if handler throws', async () => {
    expect.assertions(1)

    const error = new Error(':(')
    const nextMock = jest.fn()
    const mockHandlerThatThrows = async () => {
      await Promise.resolve(10)
      throw error
    }

    const handler = errorHandler(mockHandlerThatThrows)
    await handler({}, {}, nextMock)

    const expected = error
    const actual = first(nextMock.mock.calls[0])

    expect(actual).toEqual(expected)
  })
})
