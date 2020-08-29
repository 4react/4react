import { StoryArea, StoryBackground } from '@4react/stories'
import { number } from '@storybook/addon-knobs'
import React from 'react'
import { FieldSet } from './FieldSet'
import { Field } from '../Field/Field'

export default {
  component: FieldSet,
  title: 'design/input/form/FieldSet'
}

export const Basic = () => {
  const numOfFields = number('num of fields', 10, { min: 1 })
  return (
    <StoryBackground>
      <FieldSet>
        {Array(numOfFields).fill().map((v, i) => (
          <Field key={i} label={`Field ${i}`} size={16}>
            <StoryArea height={32}>children</StoryArea>
          </Field>
        ))}
      </FieldSet>
    </StoryBackground>
  )
}
