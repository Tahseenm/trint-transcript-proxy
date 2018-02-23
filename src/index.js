import app from './app'


/** Disable `Powered by Express` header on response for better security */
app.disable('x-powered-by')


/** Start Server :) */
const server = app.listen(process.env.PORT || 3000, () => {
  console.log(`Listening on port ${server.address().port}`) // eslint-disable-line no-console
})
