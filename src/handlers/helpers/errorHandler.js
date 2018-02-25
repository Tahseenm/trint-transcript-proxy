/**
 @NOTE: A higher order function I like to use for my async express route handlers
 to avoid try/catch code below. This keeps the handlers easy to read.
 */

/** :: Function -> Function */
const handleErrors = routeHandler => async (request, respond, next) => {
  try {
    await routeHandler(request, respond)
  } catch (error) {
    next(error)
  }
}


export default handleErrors
