import React from 'react'
import UIConfigProvider from '../src/core/config/UIConfigProvider'
import './stories.sass'

export const withUIConfig = (Story: any) => (
  <UIConfigProvider>
    <Story />
  </UIConfigProvider>
)
