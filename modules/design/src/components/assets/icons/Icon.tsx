import React, { CSSProperties, FC } from 'react'
import sass from './Icon.sass'
import IconSize from './IconSize'
import { Color } from '../../../core/theme/Color'
import classNames from '../../../utils/classNames'

export interface IconProps {
  size?: IconSize
  color?: Color
  className?: string
  style?: CSSProperties
}

const Icon: FC<IconProps> = props => {
  const {
    size = IconSize.LG,
    color,
    className,
    style,
    children
  } = props

  return (
    <div
      // ref={ref as any}
      className={classNames(
        sass.container,
        className
      )}
      style={{
        width: size,
        height: size,
        color: color,
        ...style
      }}
    >
      {children}
    </div>
  )
}

export default Icon
