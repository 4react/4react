import { number } from '@storybook/addon-knobs'
import React from 'react'
import { StoryArea } from './StoryArea'
import { StoryBackground } from '../..'

export default { title: 'StoryArea' }

export const Basic = () => {
  const props = {
    width: number('width', 4, { min: 0 }, 'props'),
    height: number('height', 4, { min: 0 }, 'props')
  }
  return (
    <StoryBackground>
      <StoryArea {...props} />
    </StoryBackground>
  )
}
