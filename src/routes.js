import { Router } from 'express'
import { getTranscript } from './handlers/transcript'


const router = Router()

/** GET /api/v1/transcript */
router.get('/transcript', getTranscript)


export default router
