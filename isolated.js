module.exports = exp => {
  let result
  try {
    result = eval(exp)
  } catch(ex) {
    result = ex
  }
  return result.toString()
}