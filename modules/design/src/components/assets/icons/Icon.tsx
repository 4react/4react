import cx from 'classnames'
import React, { CSSProperties, FC } from 'react'
import sass from './Icon.sass'
import IconSize from './IconSize'
import { Color } from '../../../core/theme/Color'

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

  const classNames = cx(
    sass.container,
    className
  )

  const styles = {
    width: size,
    height: size,
    color: color,
    ...style
  }

  return (
    <div
      // ref={ref as any}
      className={classNames}
      style={styles}
    >
      {children}
    </div>
  )
}

export default Icon
