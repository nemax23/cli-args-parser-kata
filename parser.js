
const getValidInput = (input) => {
  if (Array.isArray(input)) {
    return input
  }
  if (input.startsWith('[') && input.endsWith(']')) {
    const cleanedInput = input.replace(/\s/gi, '')
    return cleanedInput.substring(1, cleanedInput.length - 1).split(',')
  }
  return input.split(' ')
}

const parseInput = (input) => {
  const params = {}
  let lastParam = null

  input.forEach((arg) => {
    if (arg.startsWith('--')) {
      const param = arg.substring(2)
      lastParam = param
      if (!params[param]) {
        params[param] = true
      }
    } else if (lastParam !== null) {
      const newValue = isNaN(arg) ? arg : parseInt(arg)
      const currentValue = params[lastParam]
      if (currentValue === true) {
        params[lastParam] = newValue
      } else if (Array.isArray(currentValue)) {
        params[lastParam] = [...currentValue, newValue]
      } else {
        params[lastParam] = [currentValue, newValue]
      }
    }
  })
  return params
}

const parse = (input) => {
  const validatedInput = getValidInput(input)
  if (validatedInput.length === 0) {
    return {}
  }
  return parseInput(validatedInput)
}

module.exports = {
  parse
}
