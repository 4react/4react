const adaptSize = (size?: number | string) => {
  if (size) {
    if (typeof size === 'number') {
      return `${size}px`
    }
    return size
  }
  return '1px'
}

export default adaptSize
