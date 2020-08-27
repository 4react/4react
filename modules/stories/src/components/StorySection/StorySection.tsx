import { ClassProp, parseClassProp, parseItemOrList, parseStyleProp, StyleProp } from '@4react/syntax'
import React, { FC } from 'react'
import styles from './StorySection.sass'

export interface StorySectionProps {
  title: string
  className?: ClassProp
  style?: StyleProp
}

export const StorySection: FC<StorySectionProps> = props => {
  const { title, className, style, children } = props
  return (
    <div
      className={parseClassProp([styles.container, ...parseItemOrList(className)])}
      style={parseStyleProp(style)}
    >
      <span className={styles.title}>{title}</span>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  )
}
