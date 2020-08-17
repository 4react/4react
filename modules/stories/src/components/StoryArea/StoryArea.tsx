import { Flex, FlexProps } from '@4react/flex'
import { classList } from '@4react/syntax'
import React, { FC } from 'react'
import styles from './StoryArea.sass'

export interface StoryAreaProps
  extends Omit<FlexProps<void>, 'as' | 'direction' | 'row' | 'column' | 'reverse' | 'justify' | 'align' | 'lines' | 'wrap'> {
  name?: string
}

export const StoryArea: FC<StoryAreaProps> = props => {
  const { name, className, ...otherProps } = props

  return (
    <Flex className={classList(styles.container, className)} {...otherProps}>
      {name && (
        <span className={styles.name}>
          {name}
        </span>
      )}
    </Flex>
  )
}
