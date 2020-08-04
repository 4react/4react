import React from 'react'
import styled from 'styled-components'
import FlexAlign, { alignItems, alignSelf } from '../model/FlexAlign'
import FlexBasis, { flexBasis } from '../model/FlexBasis'
import FlexDirection, { flexDirection } from '../model/FlexDirection'
import FlexJustify, { justifyContent } from '../model/FlexJustify'
import FlexLineAlign, { alignContent } from '../model/FlexLineAlign'
import FlexWrap, { flexWrap } from '../model/FlexWrap'

const flexGrow = (grow: boolean | number = 0): number => {
  switch (typeof grow) {
    case 'boolean':
      return grow ? 1 : 0
    case 'number':
      return grow
    default:
      return 0
  }
}

const flexShrink = (shrink: boolean | number = 0): number => {
  switch (typeof shrink) {
    case 'boolean':
      return shrink ? 1 : 0
    case 'number':
      return shrink
    default:
      return 0
  }
}

export type FlexProps<P> = P & {
  // generic
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>
  className?: string
  style?: object
  // flex
  inline?: boolean
  direction?: FlexDirection
  row?: boolean
  column?: boolean
  reverse?: boolean
  justify?: FlexJustify
  align?: FlexAlign
  lines?: FlexLineAlign
  wrap?: boolean | FlexWrap
  // flex-item
  alignSelf?: FlexAlign
  order?: number
  grow?: boolean | number
  shrink?: boolean | number
  basis?: FlexBasis
}

const FlexComponent = styled.div<FlexProps<any>>`
  // flex
  display: ${p => (p.inline ? 'inline-flex' : 'flex')};
  flex-direction: ${p => flexDirection(p.direction, p.row, p.column, p.reverse)};
  justify-content: ${p => justifyContent(p.justify)};
  align-items: ${p => alignItems(p.align)};
  align-content: ${p => alignContent(p.lines)};
  flex-wrap: ${p => flexWrap(p.wrap)};
  // flex-item
  align-self: ${p => alignSelf(p.alignSelf)};
  order: ${p => p.order};
  flex-grow: ${p => flexGrow(p.grow)};
  flex-shrink: ${p => flexShrink(p.shrink)};
  flex-basis: ${p => flexBasis(p.basis)};
`

export const Flex = <P extends {}>(props: FlexProps<P>) => {
  const { as = 'div', ...otherProps } = props

  return <FlexComponent as={as} {...otherProps} />
}

export default Flex
