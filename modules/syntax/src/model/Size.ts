export const SIZE_UNIT = 8

export enum SpecialSize {
  FILL = 'fill'
}

export type Size = number | string | SpecialSize

export const parseSize = (value?: Size): string | undefined => {
  if (typeof value === 'number') return `${value * SIZE_UNIT}px`
  if (typeof value === 'string') {
    if (value === SpecialSize.FILL) {
      return '100%'
    }
    return value
  }
  return undefined
}
