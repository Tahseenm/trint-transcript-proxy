import express from 'express'


const app = express()

app.get('/', (request, respond) => {
  respond.json({
    message: 'Hello, World!',
  })
})


export default app
