import React from 'react'
import { StoryContent, StoryContentStatus } from './StoryContent'

export default {
  title: 'stories/StoryContent',
  component: StoryContent,
  argTypes: {
    width: { control: { type: 'number' } },
    height: { control: { type: 'number' } },
    margin: { control: { type: 'number' } },
    padding: { control: { type: 'number' } },
    name: { control: { type: 'text' } },
    status: { control: { type: 'radio', options: StoryContentStatus } }
  }
}

export const Basic = args => (
  <StoryContent {...args} />
)
Basic.args = {
  width: 128,
  height: 64,
  margin: 8,
  padding: 8,
  name: '',
  status: StoryContentStatus.NEUTRAL
}
