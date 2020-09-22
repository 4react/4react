import { ClassProp, composeClass, composeStyle, parseItemOrList, StyleProp } from '@4react/syntax'
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
      className={composeClass([styles.container, ...parseItemOrList(className)])}
      style={composeStyle(style)}
    >
      <span className={styles.title}>{title}</span>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  )
}
