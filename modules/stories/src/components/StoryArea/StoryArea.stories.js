import React from 'react'
import { StoryBackground } from '../..'
import { StoryContent } from '../StoryContent/StoryContent'
import { StoryArea } from './StoryArea'

export default { title: 'stories/StoryArea' }

export const Basic = () => (
  <StoryBackground>
    <StoryArea width="fill" column>
      <StoryContent width="fill" height={32} margin={8} />
      <StoryContent width="fill" height={32} margin={8} />
      <StoryContent width="fill" height={32} margin={8} />
    </StoryArea>
  </StoryBackground>
)
