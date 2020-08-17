import { text } from '@storybook/addon-knobs'
import React from 'react'
import { StoryArea } from './StoryArea'
import { StoryBackground } from '../..'
import { size } from '../../knobs/size'

export default { title: 'StoryArea' }

export const Basic = () => {
  const props = {
    width: size('width', 4, 'props'),
    height: size('height', 4, 'props')
  }
  const content = text('content', '', 'props')
  return (
    <StoryBackground>
      <StoryArea {...props}>
        {content}
      </StoryArea>
    </StoryBackground>
  )
}
