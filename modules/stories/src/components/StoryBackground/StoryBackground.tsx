import { ClassProp, composeClass, composeStyle, StyleProp } from '@4react/syntax'
import React, { FC } from 'react'
import styles from './StoryBackground.sass'

export interface StoryBackgroundProps {
  fullscreen?: boolean
  className?: ClassProp
  style?: StyleProp
}

export const StoryBackground: FC<StoryBackgroundProps> = props => {
  const {
    fullscreen = false,
    className,
    style,
    children
  } = props
  return (
    <div
      className={composeClass([
        styles.container,
        fullscreen && styles.fullscreen,
        ...Array.isArray(className) ? className : [className]
      ])}
      style={composeStyle(Array.isArray(style) ? style : [style])}
    >
      {children}
    </div>
  )
}
