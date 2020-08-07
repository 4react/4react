import { text } from '@storybook/addon-knobs'
import React from 'react'
import { defaultTheme, ThemeColor } from '../src/core/theme/Theme'
import UIConfigProvider from '../src/core/uiConfig/UIConfigProvider'

export const withContext = Story => {
  const theme = {}
  Object.values(ThemeColor).map(color => {
    theme[color] = text(color, defaultTheme[color], 'theme')
  })

  return (
    <UIConfigProvider theme={theme}>
      <Story />
    </UIConfigProvider>
  )
}
