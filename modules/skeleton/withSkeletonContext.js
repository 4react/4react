import { color, number } from '@storybook/addon-knobs'
import React from 'react'
import { SkeletonProvider } from './src'

export const withSkeletonContext = Story => {
  const config = {
    color: color('color', '#dddddd', 'config'),
    duration: number('duration', 1, { min: 0 }, 'config')
  }

  return (
    <SkeletonProvider config={config}>
      <Story />
    </SkeletonProvider>
  )
}
