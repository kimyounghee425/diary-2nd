export const randomNumber = (min = 0, max = 0) => {
  if (min === 0 && max === 0) {
    return Math.floor(Math.random() * 10000000)
  } else {
    min = Math.ceil(min)
    max = Math.floor(max)

    return Math.floor(Math.random() * (max - min + 1)) + min
  }
}
