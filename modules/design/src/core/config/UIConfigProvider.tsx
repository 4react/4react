import React, { FC } from 'react'
import { UIConfig, defaultUIConfig } from './UIConfig'
import { UIConfigContext } from './UIConfigContext'
import { Theme } from '../theme/Theme'

export interface UIConfigProviderProps {
  theme?: Theme
}

export const UIConfigProvider: FC<UIConfigProviderProps> = props => {
  const { theme, children } = props

  const context: UIConfig = defaultUIConfig
  if (theme) {
    context.theme = theme
  }

  return (
    <UIConfigContext.Provider value={context}>
      {children}
    </UIConfigContext.Provider>
  )
}

export default UIConfigProvider
