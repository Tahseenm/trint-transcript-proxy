/** :: () -> boolean */
const isProduction = () => process.env.NODE_ENV === 'production'

/** :: () -> boolean */
const isDevelopment = () => !isProduction()


export {
  isProduction,
  isDevelopment,
}
