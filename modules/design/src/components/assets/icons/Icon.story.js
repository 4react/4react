import { StoryArea } from '@4react/stories'
import { select } from '@storybook/addon-knobs'
import React from 'react'
import Icon from './Icon'
import IconSize from './IconSize'
import { ThemeColor } from '../../../core/theme/Theme'

export const IconStory = () => {
  const props = {
    size: select('size', IconSize, IconSize.MD, 'props'),
    color: select('size', ThemeColor, ThemeColor.PRIMARY, 'props')
  }

  return (
    <Icon {...props}>
      <StoryArea />
    </Icon>
  )
}
