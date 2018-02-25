import axios from 'axios'


const TRANSCRIPT_S3_URL = 'https://s3.amazonaws.com/com.trint.misc.challenge/transcript.json'

/** :: (limit: number, offset: number) -> Promise<word[]> */
const getTranscript = async (limit, offset) => {
  const {
    data: {
      transcript: {
        words,
      },
    },
  } = await axios.get(TRANSCRIPT_S3_URL)

  const wordsChunk = words.slice(offset * limit, (offset * limit) + limit)

  return {
    words: wordsChunk,
    length: words.length,
  }
}


export {
  getTranscript as default,
  TRANSCRIPT_S3_URL,
}
