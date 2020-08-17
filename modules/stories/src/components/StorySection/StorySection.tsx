import { classList } from '@4react/syntax'
import React, { CSSProperties, FC } from 'react'
import styles from './StorySection.sass'

export interface StorySectionProps {
  title: string
  className?: string
  style?: CSSProperties
}

export const StorySection: FC<StorySectionProps> = props => {
  const { title, className, style, children } = props
  return (
    <div className={classList(styles.container, className)} style={style}>
      <span className={styles.title}>{title}</span>
      {children}
    </div>
  )
}
