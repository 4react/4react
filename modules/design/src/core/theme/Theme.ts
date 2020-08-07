export enum ThemeColor {
  PRIMARY_DARK = 'primary-dark',
  PRIMARY = 'primary',
  TEXT = 'text',
  BACKGROUND = 'background',
}

export type Theme = {
  [color in ThemeColor]: string
}

export const defaultTheme: Theme = {
  [ThemeColor.PRIMARY_DARK]: '#faafaa',
  [ThemeColor.PRIMARY]: '#faafaa',
  [ThemeColor.TEXT]: '#faafaa',
  [ThemeColor.BACKGROUND]: '#faafaa',
}
