import { text } from '@storybook/addon-knobs'
import React from 'react'
import { StoryBackground } from '../..'
import { StoryContent } from '../StoryContent/StoryContent'
import { StorySection } from './StorySection'

export default { title: 'stories/StorySection' }

export const Single = () => {
  const props = {
    title: text('title', 'Title', 'props')
  }
  return (
    <StoryBackground fullscreen>
      <StorySection {...props}>
        <StoryContent width="fill" height={32} />
        <StoryContent width="fill" height={32} margin={{ top: 16 }} />
        <StoryContent width="fill" height={32} margin={{ top: 16 }} />
      </StorySection>
    </StoryBackground>
  )
}

export const Multiple = () => (
  <StoryBackground fullscreen>
    <StorySection title="Section 1">
      <StoryContent width="fill" height={40} />
    </StorySection>
    <StorySection title="Section 2">
      <StoryContent width="fill" height={16} />
      <StoryContent width="fill" height={16} margin={{ top: 4 }} />
    </StorySection>
    <StorySection title="Section 3">
      <StoryContent width="fill" height={24} />
      <StoryContent width="fill" height={24} margin={{ top: 8 }} />
      <StoryContent width="fill" height={24} margin={{ top: 8 }} />
    </StorySection>
  </StoryBackground>
)
