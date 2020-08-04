export enum FlexJustify {
  START = 'start',
  END = 'end',
  CENTER = 'center',
  SPACE_BETWEEN = 'space-between',
  SPACE_AROUND = 'space-around',
  SPACE_EVENLY = 'space-evenly',
}

export const justifyContent = (
  justify: FlexJustify = FlexJustify.START
): string | null => {
  switch (justify) {
    case FlexJustify.START:
      return 'flex-start'
    case FlexJustify.END:
      return 'flex-end'
    case FlexJustify.CENTER:
      return 'center'
    case FlexJustify.SPACE_BETWEEN:
      return 'space-between'
    case FlexJustify.SPACE_AROUND:
      return 'space-around'
    case FlexJustify.SPACE_EVENLY:
      return 'space-evenly'
    default:
      return null
  }
}

export default FlexJustify
