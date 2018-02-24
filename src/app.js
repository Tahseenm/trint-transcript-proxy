import express from 'express'


const app = express()

app.get('/', (request, respond) => {
  respond.json({
    message: 'Hello, World!',
  })
})

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
