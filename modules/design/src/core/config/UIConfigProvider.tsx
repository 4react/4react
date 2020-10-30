import React, { FC } from 'react'
import { Palette } from '../../typography/color'
import { FontsConfig } from './FontsConfig'
import { adaptPalette } from './ThemeConfig'
import { defaultUIConfig, UIConfig } from './UIConfig'
import { UIConfigContext } from './UIConfigContext'

export interface UIConfigProviderProps {
  palette?: Palette
  fonts?: FontsConfig
}

export const UIConfigProvider: FC<UIConfigProviderProps> = props => {
  const { palette, fonts, children } = props

  const context: UIConfig = defaultUIConfig
  if (palette) {
    context.theme = { colors: adaptPalette(palette) }
  }
  if (fonts) {
    context.fonts = fonts
  }

  return (
    <UIConfigContext.Provider value={context}>
      {children}
    </UIConfigContext.Provider>
  )
}

export default UIConfigProvider
