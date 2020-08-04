export enum FlexDirection {
  ROW = 'row',
  COLUMN = 'column',
}

export const flexDirection = (
  direction: FlexDirection = FlexDirection.ROW,
  row: boolean = false,
  column: boolean = false,
  reverse: boolean = false
): string | null => {
  let property = direction
  if (row) {
    property = FlexDirection.ROW
  }
  if (column) {
    property = FlexDirection.COLUMN
  }

  switch (property) {
    case FlexDirection.ROW:
      return reverse ? 'row-reverse' : 'row'
    case FlexDirection.COLUMN:
      return reverse ? 'column-reverse' : 'column'
    default:
      return null
  }
}

export default FlexDirection
