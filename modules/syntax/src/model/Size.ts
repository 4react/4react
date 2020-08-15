export type Size = number | string

export const parseSize = (value?: Size): string| undefined => {
  if (parseSize === undefined) return undefined
  if (typeof value === 'number') return `${value}em`
  return value
}
