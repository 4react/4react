import { Flex, FlexAlign, FlexJustify, FlexProps } from '@4react/flex'
import React, { FC } from 'react'
import styles from './StoryArea.sass'

export interface StoryAreaProps
  extends Omit<FlexProps<HTMLDivElement>, 'as' | 'direction' | 'row' | 'column' | 'reverse' | 'justify' | 'align' | 'lines' | 'wrap'> {
  name?: string
}

export const StoryArea: FC<StoryAreaProps> = props => {
  const { name, className, ...otherProps } = props

  return (
    <Flex
      className={[styles.container, ...Array.isArray(className) ? className : [className]]}
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
