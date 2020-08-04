export enum FlexWrap {
  REVERSE = 'reverse',
}

export const flexWrap = (
  wrap: boolean | FlexWrap = false
): string | null => {
  switch (typeof wrap) {
    case 'boolean':
      return wrap ? 'wrap' : 'nowrap'
    case 'string':
      if (wrap === FlexWrap.REVERSE) {
        return 'wrap-reverse'
      }
      return null
    default:
      return null
  }

}

export default FlexWrap
