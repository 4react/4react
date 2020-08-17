import { boolean } from '@storybook/addon-knobs'
import React from 'react'
import { StoryBackground } from './StoryBackground'
import { StoryArea } from '../../index'

export default { title: 'StoryBackground' }

export const Basic = () => {
  const props = {
    fullscreen: boolean('fullscreen', false, 'props')
  }
  return (
    <StoryBackground {...props}>
      <StoryArea width={4} height={4} />
    </StoryBackground>
  )
}
