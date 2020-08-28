import { size } from '@4react/stories'
import { boolean, number, select, text } from '@storybook/addon-knobs'
import React from 'react'
import { Flex } from './Flex'
import styles from './Flex.stories.sass'
import { FlexAlign } from '../../model/FlexAlign'
import { FlexDirection } from '../../model/FlexDirection'
import { FlexJustify } from '../../model/FlexJustify'
import { FlexLineAlign } from '../../model/FlexLineAlign'

export default { component: Flex, title: 'flex/Flex' }

export const AsContainer = () => (
  <Flex
    inline={boolean('inline', false, 'props')}
    direction={select('direction', FlexDirection, FlexDirection.ROW, 'props')}
    row={boolean('row', false, 'props')}
    column={boolean('column', false, 'props')}
    reverse={boolean('reverse', false, 'props')}
    justify={select('justify', FlexJustify, FlexJustify.START, 'props')}
    align={select('align', FlexAlign, FlexAlign.START, 'props')}
    lines={select('lines', FlexLineAlign, FlexLineAlign.START, 'props')}
    wrap={boolean('wrap', false, 'props')}
    margin={size('margin', 2, 'props')}
    padding={size('padding', 4, 'props')}
    className={styles.asContainer}
  >
    <div className={styles.content}>1</div>
    <div className={styles.content}>2</div>
    <div className={styles.content}>3</div>
    <div className={styles.content}>4</div>
  </Flex>
)

export const AsItem = () => {
  const props = {
    self: select('self', FlexAlign, FlexAlign.START, 'props'),
    order: number('order', 2, { min: 0 }, 'props'),
    grow: number('grow', 0, { min: 0 }, 'props'),
    shrink: number('shrink', 0, { min: 0 }, 'props'),
    basis: text('basis', '200px', 'props')
  }
  return (
    <Flex row align="start" className={styles.asItem}>
      <div className={styles.otherContent} style={{ order: 1 }}>1</div>
      <Flex justify="center" align="center" {...props} className={styles.content}>X</Flex>
      <div className={styles.otherContent} style={{ order: 3 }}>3</div>
    </Flex>
  )
}

export const Combination = () => (
  <Flex row justify="space-between" align="center" className={styles.combination}>
    <Flex self="start" className={styles.item} />
    <Flex shrink className={styles.item} />
    <Flex
      self="stretch"
      column
      align="center"
      width={300}
      className={styles.innerContainer}
    >
      <Flex self="stretch" grow className={styles.item} />
      <Flex className={styles.item} />
      <Flex self="end" grow={4} className={styles.item} />
    </Flex>
  </Flex>
)
