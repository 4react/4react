// @ts-ignore
import parseRGBA from 'color-rgba'

export const rgba = (color: string, alpha: number): string => {
  const [r, g, b, a] = parseRGBA(color)
  return `rgba(${r}, ${g}, ${b}, ${alpha || a})`
}

export enum PaletteColor {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  TERTIARY = 'tertiary',
  SUCCESS = 'success',
  ERROR = 'error',
}

export type Palette = {
  [color in PaletteColor]: string
}

export enum Color {
  PRIMARY_100 = 'primary-100',
  PRIMARY_75 = 'primary-75',
  PRIMARY_50 = 'primary-50',
  PRIMARY_25 = 'primary-25',
  SECONDARY_100 = 'secondary-100',
  SECONDARY_75 = 'secondary-75',
  SECONDARY_50 = 'secondary-50',
  SECONDARY_25 = 'secondary-25',
  TERTIARY_100 = 'tertiary-100',
  TERTIARY_75 = 'tertiary-75',
  TERTIARY_50 = 'tertiary-50',
  TERTIARY_25 = 'tertiary-25',
  SUCCESS_100 = 'success-100',
  SUCCESS_75 = 'success-75',
  SUCCESS_50 = 'success-50',
  SUCCESS_25 = 'success-25',
  ERROR_100 = 'error-100',
  ERROR_75 = 'error-75',
  ERROR_50 = 'error-50',
  ERROR_25 = 'error-25',
}

export type Colors = {
  [color in Color]: string
}
