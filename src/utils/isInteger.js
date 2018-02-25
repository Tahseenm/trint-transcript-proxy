/**
 Check if given string or number is a integer
 [1]. Check if number is integer and return fale for floating numbers.
 */

/** :: (val: any) -> boolean */
const isInteger = (val) => {
  if (typeof val !== 'string' && typeof val !== 'number') return false

  const int = parseInt(val, 10)

  if (Number.isNaN(int)) return false

  return int.toString() === val.toString()  /* [1] */
}


export default isInteger
