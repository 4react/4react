import { select, text } from '@storybook/addon-knobs'
import React from 'react'
import { StoryContent, StoryContentStatus } from './StoryContent'
import { StoryBackground } from '../..'
import { size } from '../../knobs/size'

export default { title: 'stories/StoryContent' }

export const Basic = () => {
  const props = {
    width: size('width', 64, 'props'),
    height: size('height', 64, 'props'),
    margin: size('margin', 8, 'props'),
    padding: size('padding', 8, 'props'),
    name: text('name', '', 'props'),
    status: select('status', StoryContentStatus, StoryContentStatus.NEUTRAL, 'props')
  }
  return (
    <StoryBackground>
      <StoryContent {...props} />
    </StoryBackground>
  )
}
