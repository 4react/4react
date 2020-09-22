import {
  BoxValue, ClassProp, parseBoxValue, parseSize, Size,
  StyleProp, BoundedValue, parseBoundedValue, composeClass, composeStyle, parseItemOrList
} from '@4react/syntax'
import React, { FC } from 'react'
import styles from './Flex.sass'
import { FlexAlign } from '../../model/FlexAlign'
import { FlexBasis } from '../../model/FlexBasis'
import { FlexDirection } from '../../model/FlexDirection'
import { FlexJustify } from '../../model/FlexJustify'
import { FlexLineAlign } from '../../model/FlexLineAlign'
import { flexGrow, flexShrink, FlexSize } from '../../model/FlexSize'
import { FlexWrap, FlexWrapSpecialValue } from '../../model/FlexWrap'

const directionClass = (direction: FlexDirection, row: boolean, column: boolean): string => {
  if (column) return styles.column
  if (row) return styles.row
  return styles[direction]
}

const wrapClass = (wrap: FlexWrap): string | undefined => {
  if (typeof wrap === 'boolean' && wrap) return styles.wrap
  if (wrap === FlexWrapSpecialValue.REVERSE) return styles.wrapReverse
  return undefined
}

export interface FlexProps<P extends HTMLElement> {
  // basic
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>
  className?: ClassProp
  style?: StyleProp
  // flex
  inline?: boolean
  direction?: FlexDirection
  row?: boolean
  column?: boolean
  reverse?: boolean
  justify?: FlexJustify
  align?: FlexAlign
  wrap?: FlexWrap
  lines?: FlexLineAlign
  // flex-item
  self?: FlexAlign
  order?: number
  grow?: FlexSize
  shrink?: FlexSize
  basis?: FlexBasis
  // size
  width?: BoundedValue<Size>
  height?: BoundedValue<Size>
  margin?: BoxValue<Size>
  padding?: BoxValue<Size>
}

export type FlexComponent<P extends HTMLElement = HTMLDivElement> = FC<FlexProps<P>>

export const Flex: FlexComponent = props => {
  const {
    // basic
    as = 'div',
    // flex
    inline = false,
    direction = FlexDirection.ROW,
    row = false,
    column = false,
    reverse = false,
    justify = FlexJustify.START,
    align = FlexAlign.STRETCH,
    lines = FlexLineAlign.STRETCH,
    wrap = false,
    // flex-item
    self,
    order,
    grow,
    shrink,
    basis,
    // size
    width,
    height,
    margin,
    padding,
    // generic
    className,
    style,
    // @ts-ignore
    ...otherProps
  } = props

  const composedClassName = composeClass([
    styles.flex,
    inline && styles.inline,
    directionClass(direction, row, column),
    reverse && styles.reverse,
    styles[`justify-${justify}`],
    styles[`align-${align}`],
    styles[`lines-${lines}`],
    wrapClass(wrap),
    styles[`align-self-${self}`],
    ...parseItemOrList(className)
  ])

  const margins = parseBoxValue(margin)
  const paddings = parseBoxValue(padding)
  const widths = parseBoundedValue(width)
  const heights = parseBoundedValue(height)

  const composedStyle = composeStyle([
    !!order && { order },
    !!grow && flexGrow(grow),
    !!shrink && flexShrink(shrink),
    !!basis && { flexBasis: parseSize(basis) },
    !!widths.base && { width: parseSize(widths.base) },
    !!widths.min && { minWidth: parseSize(widths.min) },
    !!widths.max && { maxWidth: parseSize(widths.max) },
    !!heights.base && { height: parseSize(heights.base) },
    !!heights.min && { minHeight: parseSize(heights.min) },
    !!heights.max && { minWidth: parseSize(heights.max) },
    !!margins.top && { marginTop: parseSize(margins.top) },
    !!margins.left && { marginLeft: parseSize(margins.left) },
    !!margins.right && { marginRight: parseSize(margins.right) },
    !!margins.bottom && { marginBottom: parseSize(margins.bottom) },
    !!paddings.top && { paddingTop: parseSize(paddings.top) },
    !!paddings.left && { paddingLeft: parseSize(paddings.left) },
    !!paddings.right && { paddingRight: parseSize(paddings.right) },
    !!paddings.bottom && { paddingBottom: parseSize(paddings.bottom) },
    ...parseItemOrList(style)
  ])

  return React.createElement(as, {
    className: composedClassName,
    style: composedStyle,
    ...otherProps
  })
}
