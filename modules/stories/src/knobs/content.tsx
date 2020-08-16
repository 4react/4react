import { boolean, text } from '@storybook/addon-knobs'
import React from 'react'
import { StoryArea } from '..'

export const content = (
  name: string,
  renderDefault: boolean,
  options?: {
    width?: string
    height?: string
  }
) => {
  if (!boolean('render', renderDefault, name)) return null
  return (
    <StoryArea
      width={text('width', options?.width || '100%', name)}
      height={text('height', options?.height || '100%', name)}
    >
      {name}
    </StoryArea>
  )
}
