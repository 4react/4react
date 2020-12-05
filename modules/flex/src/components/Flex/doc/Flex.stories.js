import React from 'react'
import { Flex } from '../Flex'
import styles from './Flex.stories.sass'

export default {
  title: 'flex/Flex',
  component: Flex,
  argTypes: {
    margin: { control: { type: 'number' } }
  }
}

export const AsContainer = Flex.bind({})
AsContainer.args = {
  inline: true,
  className: styles.asContainer,
  children: (
    <>
      <div className={styles.content}>1</div>
      <div className={styles.content}>2</div>
      <div className={styles.content}>3</div>
      <div className={styles.content}>4</div>
    </>
  ),
  backgroundColor: '#ffaaaa',
  margin: 8
}

// export const AsContainer = () => (
//   <Flex
//     inline={boolean('inline', false, 'props')}
//     direction={select('direction', FlexDirection, FlexDirection.ROW, 'props')}
//     row={boolean('row', false, 'props')}
//     column={boolean('column', false, 'props')}
//     reverse={boolean('reverse', false, 'props')}
//     justify={select('justify', FlexJustify, FlexJustify.START, 'props')}
//     align={select('align', FlexAlign, FlexAlign.START, 'props')}
//     lines={select('lines', FlexLineAlign, FlexLineAlign.START, 'props')}
//     wrap={boolean('wrap', false, 'props')}
//     margin={size('margin', 2, 'props')}
//     padding={size('padding', 4, 'props')}
//     className={styles.asContainer}
//   >
//     <div className={styles.content}>1</div>
//     <div className={styles.content}>2</div>
//     <div className={styles.content}>3</div>
//     <div className={styles.content}>4</div>
//   </Flex>
// )
//
// export const AsItem = () => {
//   const props = {
//     self: select('self', FlexAlign, FlexAlign.START, 'props'),
//     order: number('order', 2, { min: 0 }, 'props'),
//     grow: number('grow', 0, { min: 0 }, 'props'),
//     shrink: number('shrink', 0, { min: 0 }, 'props'),
//     basis: text('basis', '200px', 'props')
//   }
//   return (
//     <Flex row align="start" className={styles.asItem}>
//       <div className={styles.otherContent} style={{ order: 1 }}>1</div>
//       <Flex justify="center" align="center" {...props} className={styles.content}>X</Flex>
//       <div className={styles.otherContent} style={{ order: 3 }}>3</div>
//     </Flex>
//   )
// }
//
// export const Combination = () => (
//   <Flex row justify="space-between" align="center" className={styles.combination}>
//     <Flex self="start" className={styles.item} />
//     <Flex shrink className={styles.item} />
//     <Flex
//       self="stretch"
//       column
//       align="center"
//       width={300}
//       className={styles.innerContainer}
//     >
//       <Flex self="stretch" grow className={styles.item} />
//       <Flex className={styles.item} />
//       <Flex self="end" grow={4} className={styles.item} />
//     </Flex>
//   </Flex>
// )
