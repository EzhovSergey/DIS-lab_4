import { printError } from './printError.js'

export const testErrors = () => {
  try {
    throw new EvalError()
  } catch (error) {
    printError(error)
  }
  try {
    throw new RangeError()
  } catch (error) {
    printError(error)
  }
  try {
    throw new ReferenceError()
  } catch (error) {
    printError(error)
  }
  try {
    throw new SyntaxError()
  } catch (error) {
    printError(error)
  }
  try {
    throw new TypeError()
  } catch (error) {
    printError(error)
  }
  try {
    throw new URIError()
  } catch (error) {
    printError(error)
  }
}
