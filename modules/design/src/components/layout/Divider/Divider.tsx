import React, { CSSProperties, FC, ReactNode } from 'react'
import styles from './Divider.sass'
import classNames from '../../../utils/classNames'

export interface DividerProps {
  center?: ReactNode
  left?: ReactNode
  right?: ReactNode
  className?: string
  style?: CSSProperties
}

export const Divider: FC<DividerProps> = props => {
  const {
    center, left, right,
    className, style
  } = props

  const renderLeft = () => (
    <div className={styles.left}>
      <div className={styles.line} />
      {left && (
        <div className={styles.content}>
          {left}
        </div>
      )}
      <div className={styles.line} />
    </div>
  )

  const renderCenter = () => (
    <div className={styles.center}>
      <div className={styles.line} />
      {center && (
        <div className={styles.content}>
          {center}
        </div>
      )}
      <div className={styles.line} />
    </div>
  )

  const renderRight = () => (
    <div className={styles.right}>
      <div className={styles.line} />
      {right && (
        <div className={styles.content}>
          {right}
        </div>
      )}
      <div className={styles.line} />
    </div>
  )

  return (
    <div
      className={classNames(styles.container, className)}
      style={style}
    >
      {renderLeft()}
      {renderCenter()}
      {renderRight()}
    </div>
  )
}
