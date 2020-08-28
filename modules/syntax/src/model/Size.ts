export enum SpecialSize {
  FILL = 'fill'
}

export type Size = number | string | SpecialSize

export const parseSize = (value?: Size): string | undefined => {
  if (typeof value === 'number') return `${value}px`
  if (typeof value === 'string') {
    if (value === SpecialSize.FILL) {
      return '100%'
    }
    return value
  }
  return undefined
}
