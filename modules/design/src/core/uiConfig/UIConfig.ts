import { defaultTheme, Theme } from '../theme/Theme'

export interface UIConfig {
  theme: Theme
}

export const defaultUIConfig: UIConfig = {
  theme: defaultTheme
}

export default UIConfig
