import {
  ClassProp, parseClassProp, parseItemOrList, parseSize, parseStyleProp, Size, StyleProp
} from '@4react/syntax'
import React, { FC } from 'react'
import styles from './StorySpace.sass'

export interface StorySpaceProps {
  width?: Size
  height?: Size
  className?: ClassProp
  style?: StyleProp
}

export const StorySpace: FC<StorySpaceProps> = props => {
  const {
    width = '1px',
    height = '1px',
    className,
    style
  } = props
  return (
    <div
      className={parseClassProp([
        styles.container,
        ...parseItemOrList(className)
      ])}
      style={parseStyleProp([
        { width: parseSize(width), height: parseSize(height) },
        ...parseItemOrList(style)
      ])}
    />
  )
}
