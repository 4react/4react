import { Color, Colors, Palette, PaletteColor, rgba } from '../../typography/color'

export interface ThemeConfig {
  colors?: Colors
}

export const adaptPalette = (palette: Palette): Colors => ({
  [Color.PRIMARY_100]: rgba(palette[PaletteColor.PRIMARY], 1),
  [Color.PRIMARY_75]: rgba(palette[PaletteColor.PRIMARY], 0.75),
  [Color.PRIMARY_50]: rgba(palette[PaletteColor.PRIMARY], 0.5),
  [Color.PRIMARY_25]: rgba(palette[PaletteColor.PRIMARY], 0.25),
  [Color.SECONDARY_100]: rgba(palette[PaletteColor.SECONDARY], 1),
  [Color.SECONDARY_75]: rgba(palette[PaletteColor.SECONDARY], 0.75),
  [Color.SECONDARY_50]: rgba(palette[PaletteColor.SECONDARY], 0.5),
  [Color.SECONDARY_25]: rgba(palette[PaletteColor.SECONDARY], 0.25),
  [Color.TERTIARY_100]: rgba(palette[PaletteColor.TERTIARY], 1),
  [Color.TERTIARY_75]: rgba(palette[PaletteColor.TERTIARY], 0.75),
  [Color.TERTIARY_50]: rgba(palette[PaletteColor.TERTIARY], 0.5),
  [Color.TERTIARY_25]: rgba(palette[PaletteColor.TERTIARY], 0.25),
  [Color.SUCCESS_100]: rgba(palette[PaletteColor.SUCCESS], 1),
  [Color.SUCCESS_75]: rgba(palette[PaletteColor.SUCCESS], 0.75),
  [Color.SUCCESS_50]: rgba(palette[PaletteColor.SUCCESS], 0.5),
  [Color.SUCCESS_25]: rgba(palette[PaletteColor.SUCCESS], 0.25),
  [Color.ERROR_100]: rgba(palette[PaletteColor.ERROR], 1),
  [Color.ERROR_75]: rgba(palette[PaletteColor.ERROR], 0.75),
  [Color.ERROR_50]: rgba(palette[PaletteColor.ERROR], 0.5),
  [Color.ERROR_25]: rgba(palette[PaletteColor.ERROR], 0.25)
})

export const defaultPalette = {
  [PaletteColor.PRIMARY]: '#EAC60D',
  [PaletteColor.SECONDARY]: '#5BC0BE',
  [PaletteColor.TERTIARY]: '#EDC7CF',
  [PaletteColor.SUCCESS]: '#31D0AA',
  [PaletteColor.ERROR]: '#ED4B9E'
}

export const defaultThemeConfig = {
  colors: adaptPalette(defaultPalette)
}
