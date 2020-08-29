import React, { CSSProperties, FC, ReactNode } from 'react'
import classNames from '../../../../utils/classNames'
import classes from './Field.sass'

export interface FieldProps {
  label?: ReactNode
  action?: ReactNode
  description?: ReactNode
  size?: number
  className?: string
  style?: CSSProperties
}

export const Field: FC<FieldProps> = props => {
  const {
    label,
    action,
    description,
    size,
    className,
    style,
    children
  } = props

  const renderHeader = () => (
    <div className={classes.header}>
      {label && (
        <span className={classes.label}>
          {label}
        </span>
      )}
      <span className={classes.action}>
        {action}
      </span>
    </div>
  )

  const renderFooter = () => (
    <div className={classes.footer}>
      <div className={classes.description}>
        {description}
      </div>
    </div>
  )

  return (
    <div
      className={classNames(classes.container, className)}
      style={{
        ...(size && { width: `${size}em` }),
        ...style
      }}
    >
      {renderHeader()}
      {children}
      {renderFooter()}
    </div>
  )
}
