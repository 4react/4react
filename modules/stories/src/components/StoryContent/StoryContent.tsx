import { Flex, FlexAlign, FlexJustify, FlexProps } from '@4react/flex'
import { parseItemOrList } from '@4react/syntax'
import React, { FC } from 'react'
import styles from './StoryContent.sass'

export interface StoryContentProps
  extends Omit<FlexProps<HTMLDivElement>, 'as' | 'direction' | 'row' | 'column' | 'reverse' | 'justify' | 'align' | 'lines' | 'wrap'> {
  name?: string
}

export const StoryContent: FC<StoryContentProps> = props => {
  const { name, className, ...otherProps } = props

  return (
    <Flex
      className={[styles.container, ...parseItemOrList(className)]}
      justify={FlexJustify.CENTER}
      align={FlexAlign.CENTER}
      {...otherProps}
    >
      {name && (
        <span className={styles.name}>
          {name}
        </span>
      )}
    </Flex>
  )
}
