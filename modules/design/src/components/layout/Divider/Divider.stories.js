import { StoryArea, StoryBackground } from '@4react/stories'
import { boolean } from '@storybook/addon-knobs'
import React from 'react'
import { Divider } from './Divider'

export default {
  component: Divider,
  title: 'design/layout/Divider'
}

export const Content = () => {
  const left = boolean('left', true, 'props')
  const center = boolean('center', true, 'props')
  const right = boolean('right', true, 'props')

  const props = {
    left: left ? <StoryArea name="left" height="fill" padding={[0, 0.5]} /> : undefined,
    center: center ? <StoryArea width={0}>Center</StoryArea> : undefined,
    right: right ? <StoryArea width={0}>Right</StoryArea> : undefined
  }

  return (
    <StoryBackground>
      <Divider {...props} />
    </StoryBackground>
  )
}
