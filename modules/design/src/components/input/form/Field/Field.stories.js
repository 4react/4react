import { StoryArea, StoryBackground } from '@4react/stories'
import { boolean, number } from '@storybook/addon-knobs'
import React from 'react'
import { Field } from './Field'

export default {
  component: Field,
  title: 'design/input/form/Field'
}

export const Basic = () => {
  const props = {
    size: number('size', 0, { min: 0 }, 'props'),
    label: boolean('label', true, 'props')
      ? <StoryArea width={100}>Label</StoryArea>
      : undefined,
    action: boolean('action', false, 'props')
      ? <StoryArea>action</StoryArea>
      : undefined,
    description: boolean('description', true, 'props')
      ? <StoryArea>description</StoryArea>
      : undefined
  }

  return (
    <StoryBackground>
      <Field {...props}>
        <StoryArea height={32}>children</StoryArea>
      </Field>
    </StoryBackground>
  )
}
