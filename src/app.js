import express from 'express'
import cors from 'cors'
import errorHandler from 'errorhandler'

import routes  from './routes'
import { isDevelopment } from './utils'


const app = express()


/**
 Global express middlewares
 [1]. Add Cross origin resource sharing support.
 [2]. Add express error handler for development.
 */
app.use(cors())                               /* [1] */
if (isDevelopment()) app.use(errorHandler())  /* [2] */

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

/* eslint-disable no-console, no-unused-vars */
app.use((error, request, respond, next) => {
  if (isDevelopment()) console.error(error)  /* [1] */

  respond.status(error.status || 500)
  respond.json({
    errors: {
      message: error.message,
      error: isDevelopment() ? error : {},   /* [1] */
    },
  })
})
/* eslint-enable no-console, no-unused-vars */


export default app
