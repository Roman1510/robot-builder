export const getPrevValidIndex = (index, length) => {
  const deprecated = index - 1
  return deprecated < 0 ? length - 1 : deprecated
}

export const getNextValidIndex = (index, length) => {
  const incremented = index + 1
  return incremented > length - 1 ? 0 : incremented
}
