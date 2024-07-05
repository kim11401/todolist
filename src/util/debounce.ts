type CallbackFunction = (...args: any[]) => void

const debounce = (
  callback: CallbackFunction,
  delay: number
): CallbackFunction => {
  let timer
  return (...args) => {
    if (timer !== null) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => callback(...args), delay)
  }
}

export default debounce
