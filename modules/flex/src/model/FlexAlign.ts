export enum FlexAlign {
  STRETCH = 'stretch',
  START = 'start',
  END = 'end',
  CENTER = 'center',
  BASELINE = 'baseline',
}

export const alignItems = (
  align: FlexAlign = FlexAlign.STRETCH
): string | null => {
  switch (align) {
    case FlexAlign.STRETCH:
      return 'stretch'
    case FlexAlign.START:
      return 'flex-start'
    case FlexAlign.END:
      return 'flex-end'
    case FlexAlign.CENTER:
      return 'center'
    case FlexAlign.BASELINE:
      return 'baseline'
    default:
      return null
  }
}

export const alignSelf = (
  align?: FlexAlign
): string | null => {
  if (align) {
    return alignItems(align)
  }
  return null
}

export default FlexAlign
