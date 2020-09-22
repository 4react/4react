import { composeClass } from '@4react/syntax'
import React, { FC } from 'react'
import styles from './LocalizedFragment.sass'

export enum LocalizedTransform {
  LOWERCASE = 'lowercase',
  UPPERCASE = 'uppercase',
  CAPITALIZE = 'capitalize',
  UNSET = 'unset'
}


export interface LocalizedFragmentProps {
  transform?: LocalizedTransform
}

export const LocalizedFragment: FC<LocalizedFragmentProps> = props => {
  const { children, transform = LocalizedTransform.UNSET } = props

  return (
    <span
      className={composeClass([
        styles.container,
        styles[transform]
      ])}
    >
      {children}
    </span>
  )
}
