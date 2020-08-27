import { text } from '@storybook/addon-knobs'
import React from 'react'
import { StorySection } from './StorySection'
import { StoryArea, StoryBackground } from '../..'

export default { title: 'stories/StorySection' }

export const Single = () => {
  const props = {
    title: text('title', 'Title', 'props')
  }
  return (
    <StoryBackground fullscreen>
      <StorySection {...props}>
        <StoryArea width="fill" height={4} />
        <StoryArea width="fill" height={4} margin={{ top: 2 }} />
        <StoryArea width="fill" height={4} margin={{ top: 2 }} />
      </StorySection>
    </StoryBackground>
  )
}

export const Multiple = () => (
  <StoryBackground fullscreen>
    <StorySection title="Section 1">
      <StoryArea width="fill" height={6} />
    </StorySection>
    <StorySection title="Section 2">
      <StoryArea width="fill" height={4} />
      <StoryArea width="fill" height={4} margin={{ top: 1.5 }} />
    </StorySection>
    <StorySection title="Section 3">
      <StoryArea width="fill" height={3} />
      <StoryArea width="fill" height={3} margin={{ top: 1 }} />
      <StoryArea width="fill" height={3} margin={{ top: 1 }} />
    </StorySection>
  </StoryBackground>
)
