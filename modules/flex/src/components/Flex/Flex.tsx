import { BoxValue, classList, parseBoxValue, parseSize, Size } from '@4react/syntax'
import React, { CSSProperties } from 'react'
import { flexGrow, flexShrink, FlexSize } from '../../model/FlexSize'
import styles from './Flex.sass'
import { FlexAlign } from '../../model/FlexAlign'
import { FlexBasis } from '../../model/FlexBasis'
import { FlexDirection } from '../../model/FlexDirection'
import { FlexJustify } from '../../model/FlexJustify'
import { FlexLineAlign } from '../../model/FlexLineAlign'
import { FlexWrapSpecialValue, FlexWrap } from '../../model/FlexWrap'

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

export type FlexProps<P> = P & {
  // basic
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>
  // flex
  inline?: boolean
  direction?: FlexDirection
  row?: boolean
  column?: boolean
  reverse?: boolean
  justify?: FlexJustify
  align?: FlexAlign
  lines?: FlexLineAlign
  wrap?: FlexWrap
  // flex-item
  alignSelf?: FlexAlign
  order?: number
  grow?: FlexSize
  shrink?: FlexSize
  basis?: FlexBasis
  // generic
  width?: Size
  height?: Size
  margin?: BoxValue<Size>
  padding?: BoxValue<Size>
  className?: string
  style?: CSSProperties
}

export const Flex = <P extends any>(props: FlexProps<P>) => {
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
    alignSelf,
    order,
    grow,
    shrink,
    basis,
    // generic
    width,
    height,
    margin,
    padding,
    className: customClassName,
    style: customStyle,
    // @ts-ignore
    ...otherProps
  } = props

  // return <FlexComponent as={as} {...otherProps} />
  const classNames = classList(
    // flex
    styles.flex,
    [styles.inline, inline],
    directionClass(direction, row, column),
    [styles.reverse, reverse],
    styles[`justify-${justify}`],
    styles[`align-${align}`],
    styles[`lines-${lines}`],
    wrapClass(wrap),
    // flex-item
    styles[`align-self-${alignSelf}`],
    customClassName
  )

  const margins = parseBoxValue(margin)
  const paddings = parseBoxValue(padding)

  const style = {
    order: order,
    ...flexGrow(grow),
    ...flexShrink(shrink),
    flexBasis: parseSize(basis),
    width: parseSize(width),
    height: parseSize(height),
    marginTop: parseSize(margins.top),
    marginLeft: parseSize(margins.left),
    marginRight: parseSize(margins.right),
    marginBottom: parseSize(margins.bottom),
    paddingTop: parseSize(paddings.top),
    paddingLeft: parseSize(paddings.left),
    paddingRight: parseSize(paddings.right),
    paddingBottom: parseSize(paddings.bottom),
    ...customStyle
  }

  return React.createElement(as, {
    className: classNames,
    style: style,
    ...otherProps
  })
}
