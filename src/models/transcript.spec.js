import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import getTranscript, { TRANSCRIPT_S3_URL } from './transcript'

import transcript from './transcript.fixture.json'
import { isPromise } from '../utils'


const $axios = new MockAdapter(axios)


describe('Transcipt model', () => {
  /** Mock axios HTTP request */
  beforeAll(() => {
    $axios.onGet(TRANSCRIPT_S3_URL).reply(200, transcript)
  })


  it('should return a Promise', () => {
    const result = getTranscript(10, 0)
    const expected = true
    const actual = isPromise(result)

    expect(actual).toEqual(expected)
  })

  describe('Resolved Promise', () => {
    it('should be a object with properties `words` & `length`', async () => {
      expect.assertions(1)
      const result = await getTranscript(10, 0)
      const hasProp = Object.prototype.hasOwnProperty.bind(result)

      const expected = true
      const actual = hasProp('words') && hasProp('length')

      expect(actual).toEqual(expected)
    })

    describe('`length` object value', () => {
      it('should be a number', async () => {
        expect.assertions(1)
        const {
          length,
        } = await getTranscript(10, 0)

        const expected = 'number'
        const actual = typeof length

        expect(actual).toEqual(expected)
      })

      it('should equal to the total number of words in the transcript', async () => {
        expect.assertions(1)
        const {
          length,
        } = await getTranscript(10, 0)

        const expected = transcript.transcript.words.length
        const actual = length

        expect(actual).toEqual(expected)
      })
    })

    describe('`words` object value', () => {
      it('should be a array', async () => {
        expect.assertions(1)
        const {
          words,
        } = await getTranscript(10, 1)

        const expected = true
        const actual = Array.isArray(words)

        expect(actual).toEqual(expected)
      })

      it('should have a length less then or equal to given limit', async () => {
        expect.assertions(1)
        const limit = 10
        const {
          words,
        } = await getTranscript(limit, 0)

        const expected = true
        const actual = words.length <= limit

        expect(actual).toEqual(expected)
      })

      it('should have the correct words for offset value of 0', async () => {
        expect.assertions(1)
        const limit  = 1
        const offset = 0
        const {
          words,
        } = await getTranscript(limit, offset)

        const expected = [transcript.transcript.words[0]]
        const actual = words

        expect(actual).toEqual(expected)
      })

      it('should have the correct words for offset value of 3', async () => {
        expect.assertions(1)
        const limit  = 1
        const offset = 3
        const {
          words,
        } = await getTranscript(limit, offset)

        const expected = [transcript.transcript.words[3]]
        const actual = words

        expect(actual).toEqual(expected)
      })
    })
  })
})
