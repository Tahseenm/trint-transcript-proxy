import express from 'express'
import routes  from './routes'


const app = express()


/** API routes */
app.use('/api/v1', routes)

/** Catch 404 */
app.use((request, respond, next) => {
  const error  = new Error('Not Found')
  error.status = 404
  next(error)
})

/** Handle all request errors */
app.use((error, request, respond, next) => {
  if (request.headersSent) next(error)

  respond.status(error.status || 500)
  respond.json({
    errors: {
      message: error.message,
    },
  })
})


export default app
