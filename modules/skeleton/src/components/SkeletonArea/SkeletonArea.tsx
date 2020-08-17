import { classList, parseSize, Size } from '@4react/syntax'
import React, { CSSProperties, FC } from 'react'
import styles from './SkeletonArea.sass'
import { useSkeletonConfig } from '../../methods/useSkeletonConfig'

export interface SkeletonAreaProps {
  width?: Size
  height?: Size
  debug?: boolean
  className?: string
  style?: CSSProperties
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
      className={classList(styles.container, className)}
      style={{ ...properties, ...style }}
    >
      {children}
    </div>
  )
}
