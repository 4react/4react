import { boolean, number, select, text } from '@storybook/addon-knobs'
import React from 'react'
import { Flex } from '../src/components/Flex/Flex'
import { FlexAlign } from '../src/model/FlexAlign'
import { FlexDirection } from '../src/model/FlexDirection'
import { FlexJustify } from '../src/model/FlexJustify'
import { FlexLineAlign } from '../src/model/FlexLineAlign'
import './style.css'

export default { component: Flex, title: 'Flex' }

export const Container = () => {
  const props = {
    inline: boolean('inline', false, 'props'),
    direction: select('direction', FlexDirection, FlexDirection.ROW, 'props'),
    row: boolean('row', false, 'props'),
    column: boolean('column', false, 'props'),
    reverse: boolean('reverse', false, 'props'),
    justify: select('justify', FlexJustify, FlexJustify.START, 'props'),
    align: select('align', FlexAlign, FlexAlign.START, 'props'),
    lines: select('lines', FlexLineAlign, FlexLineAlign.START, 'props'),
    wrap: boolean('wrap', false, 'props')
  }
  return (
    <Flex {...props} className="container-container">
      <div className="container-content">1</div>
      <div className="container-content">2</div>
      <div className="container-content">3</div>
      <div className="container-content">4</div>
    </Flex>
  )
}

export const Item = () => {
  const props = {
    alignSelf: select('alignSelf', FlexAlign, FlexAlign.START, 'props'),
    order: number('order', 2, { min: 0 }, 'props'),
    grow: number('grow', 0, { min: 0 }, 'props'),
    shrink: number('shrink', 0, { min: 0 }, 'props'),
    basis: text('basis', '200px', 'props')
  }
  return (
    <Flex row align="start" className="item-container">
      <div className="item-other-content" style={{ order: 1 }}>1</div>
      <Flex justify="center" align="center" {...props} className="item-content">X</Flex>
      <div className="item-other-content" style={{ order: 3 }}>3</div>
    </Flex>
  )
}

export const Combination = () => (
  <Flex row justify="space-between" align="center" className="container">
    <Flex alignSelf="start" className="item" />
    <Flex shrink grow className="item" />
    <Flex
      alignSelf="stretch"
      grow={2}
      column justify="space-between"
      align="center"
      className="innerContainer"
    >
      <Flex alignSelf="stretch" className="item" />
      <Flex className="item" />
      <Flex alignSelf="end" grow className="item" />
    </Flex>
  </Flex>
)
