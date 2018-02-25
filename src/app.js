import express from 'express'
import routes  from './routes'
import { isDevelopment } from './utils'


const app = express()


/** API routes */
app.use('/api/v1', routes)

/** Catch 404's! */
app.use((request, respond, next) => {
  const error  = new Error('Not Found')
  error.status = 404
  next(error)
})


/**
 Handle all request errors!
 [1]. Print & send stacktrace only in development.
 */

/* eslint-disable no-console */
app.use((error, request, respond) => {
  if (isDevelopment()) console.log(error)   /* [1] */

  respond.status(error.status || 500)
  respond.json({
    errors: {
      message: error.message,
      error: isDevelopment() ? error : {},  /* [1] */
    },
  })
})
/* eslint-enable no-console */


export default app
