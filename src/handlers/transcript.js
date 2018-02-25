import transcript from '../models/transcript'
import errorHandler from './helpers/errorHandler'
import { isInteger } from '../utils'


/**
 @NOTE: Handlers act as a controller. It does not contain any business logic
 and it's responsibility includes: handling the HTTP request, calling the model
 and handling the HTTP response.
 */
const handler = async (request, respond) => {
  const {
    limit  = 100,
    offset = 0,
  } = request.query

  if (!isInteger(limit) || isInteger(offset)) throw new Error('Invalid query options. Limit and offset must be a integer.')

  const transcriptChunk = await transcript(Number(limit), Number(offset))
  respond.json(transcriptChunk)
}


export const getTranscript = errorHandler(handler)
