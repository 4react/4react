import { Flex, FlexAlign, FlexJustify, FlexProps } from '@4react/flex'
import { parseItemOrList } from '@4react/syntax'
import React, { FC } from 'react'
import styles from './StoryArea.sass'

export type StoryAreaProps = Omit<FlexProps<HTMLDivElement>, 'as' | 'inline'>

export const StoryArea: FC<StoryAreaProps> = props => {
  const { className, ...otherProps } = props

  return (
    <Flex
      className={[styles.container, ...parseItemOrList(className)]}
      justify={FlexJustify.CENTER}
      align={FlexAlign.CENTER}
      {...otherProps}
    />
  )
}
