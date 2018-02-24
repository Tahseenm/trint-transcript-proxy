import { Router } from 'express'


const router = Router()

/** GET /api/v1 */
router.get('/', (request, respond) => {
  respond.json({
    message: 'Hello, World!',
  })
})


export default router
