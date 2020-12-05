import { ClassNames, parseClassName, parseStyle, Styles } from '@4react/data-types'
import React, { FC } from 'react'
import styles from './AreaOfInfluence.sass'
import { useUIConfig } from '../../../core/config/useUIConfig'

export interface AreaOfInfluenceProps {
  // top?: Size
  className?: ClassNames
  style?: Styles
}

export const AreaOfInfluence: FC<AreaOfInfluenceProps> = props => {
  const { className, style, children } = props
  const { fonts } = useUIConfig()

  return (
    <div
      className={parseClassName([styles.areaOfInfluence, className])}
      style={parseStyle([style])}
    >
      {children}
    </div>
  )
}
