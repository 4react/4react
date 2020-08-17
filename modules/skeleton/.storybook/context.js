import { number, text } from '@storybook/addon-knobs'
import React from 'react'
import { SkeletonProvider } from '../src/components/SkeletonProvider/SkeletonProvider'

export const withContext = Story => {
  const config = {
    color: text('color', '#dddddd', 'config'),
    duration: number('duration', 1, { min: 0 }, 'config')
  }

  return (
    <SkeletonProvider config={config}>
      <Story />
    </SkeletonProvider>
  )
}
