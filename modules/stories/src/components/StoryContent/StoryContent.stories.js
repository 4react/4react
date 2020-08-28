import { text } from '@storybook/addon-knobs'
import React from 'react'
import { StoryContent } from './StoryContent'
import { StoryBackground } from '../..'
import { size } from '../../knobs/size'

export default { title: 'stories/StoryContent' }

export const Basic = () => {
  const props = {
    width: size('width', 64, 'props'),
    height: size('height', 64, 'props'),
    name: text('name', '', 'props')
  }
  return (
    <StoryBackground>
      <StoryContent {...props} />
    </StoryBackground>
  )
}
