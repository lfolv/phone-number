export const clean = input => {
  if (input.match(/[@:!]/)) {
    throw new Error('Punctuations not permitted')
  }

  if (input.match(/[a-zA-Z]/)) {
    throw new Error('Letters not permitted')
  }

  const digits = input.match(/\d/g)

  if (digits.length < 10) {
    throw new Error('Incorrect number of digits')
  }

  if (digits.length === 11) {
    if (digits[0] !== '1') {
      throw new Error('11 digits must start with 1')
    }

    digits.shift()
  }

  if (digits.length > 11) {
    throw new Error('More than 11 digits')
  }

  if (digits[0] === '0') {
    throw new Error('Area code cannot start with zero')
  }

  if (digits[0] === '1') {
    throw new Error('Area code cannot start with one')
  }

  if (digits[3] === '0') {
    throw new Error('Exchange code cannot start with zero')
  }

  if (digits[3] === '1') {
    throw new Error('Exchange code cannot start with one')
  }

  return digits.join('')
};
