import {
  ClassProp, parseClassProp, parseSize, parseStyleProp, Size, StyleProp
} from '@4react/syntax'
import React, { FC } from 'react'
import styles from './SkeletonArea.sass'
import { useSkeletonConfig } from '../../methods/useSkeletonConfig'

export interface SkeletonAreaProps {
  width?: Size
  height?: Size
  debug?: boolean
  className?: ClassProp
  style?: StyleProp
}

export const SkeletonArea: FC<SkeletonAreaProps> = props => {
  const {
    width,
    height,
    debug = false,
    className, style, children
  } = props
  const { duration } = useSkeletonConfig()

  const properties = {
    width: parseSize(width),
    height: parseSize(height),
    animationDuration: `${duration}s`,
    ...(debug && { border: '1px dashed black' })
  }

  return (
    <div
      className={parseClassProp([styles.container, ...Array.isArray(className) ? className : [className]])}
      style={parseStyleProp([properties, ...Array.isArray(style) ? style : [style]])}
    >
      {children}
    </div>
  )
}
