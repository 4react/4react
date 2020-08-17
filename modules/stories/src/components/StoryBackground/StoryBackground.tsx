import React, { CSSProperties, FC } from 'react'
import { classList } from '@4react/syntax'
import styles from './StoryBackground.sass'

export interface StoryBackgroundProps {
  fullscreen?: boolean
  className?: string
  style?: CSSProperties
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
      className={classList(
        styles.container,
        [styles.fullscreen, fullscreen],
        className
      )}
      style={style}
    >
      {children}
    </div>
  )
}
