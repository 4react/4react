export enum FlexLineAlign {
  STRETCH = 'stretch',
  START = 'start',
  END = 'end',
  CENTER = 'center',
  SPACE_BETWEEN = 'space-between',
  SPACE_AROUND = 'space-around',
  SPACE_EVENLY = 'space-evenly',
}

export const alignContent = (
  align: FlexLineAlign = FlexLineAlign.STRETCH
): string | null => {
  switch (align) {
    case FlexLineAlign.STRETCH:
      return 'stretch'
    case FlexLineAlign.START:
      return 'flex-start'
    case FlexLineAlign.END:
      return 'flex-end'
    case FlexLineAlign.CENTER:
      return 'center'
    case FlexLineAlign.SPACE_BETWEEN:
      return 'space-between'
    case FlexLineAlign.SPACE_AROUND:
      return 'space-around'
    case FlexLineAlign.SPACE_EVENLY:
      return 'space-evenly'
    default:
      return null
  }
}

export default FlexLineAlign
