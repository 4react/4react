import { classList, parseSize, Size, styleList } from '@4react/syntax'
import React, { CSSProperties, FC } from 'react'
import styles from './StoryArea.sass'

export interface StoryAreaProps {
  width?: Size
  height?: number | string
  className?: string
  style?: CSSProperties
}

export const StoryArea: FC<StoryAreaProps> = props => {
  const {
    width = '100%',
    height = '100%',
    className,
    style
  } = props
  return (
    <div
      className={classList(styles.container, className)}
      style={styleList(
        {
          width: parseSize(width),
          height: parseSize(height)
        },
        style
      )}
    />
  )
}
