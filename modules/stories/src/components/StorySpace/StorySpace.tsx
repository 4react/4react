import { classList, parseSize, Size, styleList } from '@4react/syntax'
import React, { CSSProperties, FC } from 'react'
import styles from './StorySpace.sass'

export interface StorySpaceProps {
  width?: Size
  height?: Size
  className?: string
  style?: CSSProperties
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
      className={classList(styles.container, className)}
      style={styleList(
        { width: parseSize(width), height: parseSize(height) },
        style
      )}
    />
  )
}
