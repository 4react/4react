import { Flex, FlexProps } from '@4react/flex'
import { Size } from '@4react/syntax'
import React, { FC } from 'react'
import { useSkeletonConfig } from '../../methods/useSkeletonConfig'

export interface SkeletonElementProps
  extends Omit<FlexProps<void>, 'as' | 'direction' | 'row' | 'column' | 'reverse' | 'justify' | 'align' | 'lines' | 'wrap'> {
  radius?: Size
}

export const SkeletonElement: FC<SkeletonElementProps> = props => {
  const { radius = 0, style, ...otherProps } = props
  const { color } = useSkeletonConfig()

  const properties = {
    borderRadius: `${radius}em`,
    backgroundColor: color
  }

  return (
    <Flex
      {...otherProps}
      style={{ ...properties, ...style }}
    />
  )
}
