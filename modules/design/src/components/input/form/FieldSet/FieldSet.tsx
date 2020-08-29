import React, { CSSProperties, FC } from 'react'
import classes from './FieldSet.sass'
import classNames from '../../../../utils/classNames'

export interface FieldSetProps {
  className?: string
  style?: CSSProperties
}

export const FieldSet: FC<FieldSetProps> = props => {
  const {
    className,
    style,
    children
  } = props

  return (
    <div
      className={classNames(classes.container, className)}
      style={style}
    >
      {children}
    </div>
  )
}
