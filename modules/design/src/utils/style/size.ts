export type Size = number | string

export const size = (value: Size): string => {
  if (typeof value === 'number') return `${value}em`
  return value
}
