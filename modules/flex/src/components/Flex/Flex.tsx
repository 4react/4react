import {
  BoundableValue, BoxValue, ClassNames, parseBoundableValue, parseBoxValue, parseClassName,
  parseStyle, Styles
} from '@4react/data-types'
import React, { FC } from 'react'
import styles from './Flex.sass'
import { isSize, Size } from '../../model/Size'
import { FlexAlign } from '../../model/FlexAlign'
import { FlexBasis } from '../../model/FlexBasis'
import { FlexDirection } from '../../model/FlexDirection'
import { FlexJustify } from '../../model/FlexJustify'
import { FlexLineAlign } from '../../model/FlexLineAlign'
import { parseFlexSize, FlexSize } from '../../model/FlexSize'
import { FlexWrap, FlexWrapSpecialValue } from '../../model/FlexWrap'

const directionClass = (direction: FlexDirection, row: boolean, column: boolean): string => {
  if (column) return styles.column
  if (row) return styles.row
  return styles[direction]
}

const justifyClass = (
  justify: FlexJustify,
  start: boolean,
  end: boolean,
  center: boolean,
  spaceBetween: boolean,
  spaceAround: boolean,
  spaceEvenly: boolean
): string | undefined => {
  if (start) return styles['justify-start']
  if (end) return styles['justify-end']
  if (center) return styles['justify-center']
  if (spaceBetween) return styles['justify-space-between']
  if (spaceAround) return styles['justify-space-around']
  if (spaceEvenly) return styles['justify-space-evenly']
  if (justify) return styles[`justify-${justify}`]
  return undefined
}

const wrapClass = (wrap: FlexWrap): string | undefined => {
  if (typeof wrap === 'boolean' && wrap) return styles.wrap
  if (wrap === FlexWrapSpecialValue.REVERSE) return styles['wrap-reverse']
  return undefined
}

export interface FlexProps<P extends HTMLElement> {
  // basic
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>
  className?: ClassNames
  style?: Styles
  // flex
  inline?: boolean
  direction?: FlexDirection
  row?: boolean
  column?: boolean
  reverse?: boolean
  justify?: FlexJustify
  start?: boolean
  end?: boolean
  center?: boolean
  spaceBetween?: boolean
  spaceAround?: boolean
  spaceEvenly?: boolean
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
  width?: BoundableValue<Size>
  height?: BoundableValue<Size>
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
    start = false,
    end = false,
    center = false,
    spaceBetween = false,
    spaceAround = false,
    spaceEvenly = false,
    align = FlexAlign.CENTER,
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
    ...otherProps
  } = props

  const composedClassName = parseClassName([
    styles.flex,
    inline && styles.inline,
    directionClass(direction, row, column),
    reverse && styles.reverse,
    justifyClass(justify, start, end, center, spaceBetween, spaceAround, spaceEvenly),
    styles[`align-${align}`],
    styles[`lines-${lines}`],
    wrapClass(wrap),
    styles[`align-self-${self}`],
    className
  ])

  const widths = parseBoundableValue(width, isSize)
  const heights = parseBoundableValue(height, isSize)
  const margins = parseBoxValue(margin, isSize)
  const paddings = parseBoxValue(padding, isSize)

  const composedStyle = parseStyle([
    {
      order: order,
      flexGrow: parseFlexSize(grow),
      flexShrink: parseFlexSize(shrink),
      flexBasis: basis,
      width: widths.base,
      minWidth: widths.min,
      maxWidth: widths.max,
      height: heights.base,
      minHeight: heights.min,
      maxHeight: heights.max,
      marginTop: margins.top,
      marginLeft: margins.left,
      marginRight: margins.right,
      marginBottom: margins.bottom,
      paddingTop: paddings.top,
      paddingLeft: paddings.left,
      paddingRight: paddings.right,
      paddingBottom: paddings.bottom
    },
    style
  ])

  return React.createElement(as, {
    className: composedClassName,
    style: composedStyle,
    ...otherProps
  })
}
