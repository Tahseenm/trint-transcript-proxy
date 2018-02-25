/**
 @HACK: Calling toString with `this` pointing to a instance of ES2015 Promise
 returns `[object Promise]`. This does not work in javascript enviroments that
 do not have native promise support.
 @NOTE: Usage of this helper function is NOT recommended.
 */

/** :: (val: any) -> boolean */
const isPromise = val => Object.prototype.toString.call(val).includes('Promise')


export default isPromise
