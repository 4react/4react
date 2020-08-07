import { ThemeColor } from './Theme'

export type Color = ThemeColor | string

// export const parseColor = (color: Color) => (p: StyledComponentProps): string => {
//   const { colors } = p.theme
//   if (colors.hasOwnProperty(color)) {
//     return p.theme.colors[color]
//   }
//   return color
// }
