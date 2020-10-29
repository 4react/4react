import { defaultFontsConfig, FontsConfig } from './FontsConfig'
import { defaultTheme, Theme } from '../theme/Theme'

export interface UIConfig {
  theme: Theme
  fonts: FontsConfig
}

export const defaultUIConfig: UIConfig = {
  theme: defaultTheme,
  fonts: defaultFontsConfig
}
