import { defaultFontsConfig, FontsConfig } from './FontsConfig'
import { defaultThemeConfig, ThemeConfig } from './ThemeConfig'

export interface UIConfig {
  theme: ThemeConfig
  fonts: FontsConfig
}

export const defaultUIConfig: UIConfig = {
  theme: defaultThemeConfig,
  fonts: defaultFontsConfig
}
