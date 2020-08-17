import { CSSProperties } from 'react'

export type FlexSize = boolean | number

export const flexGrow = (size?: FlexSize): CSSProperties => {
  if (size !== undefined) {
    if (typeof size === 'number') return { flexGrow: size }
    if (size) {
      return { flexGrow: 1 }
    }
  }
  return {}
}

export const flexShrink = (size?: FlexSize): CSSProperties => {
  if (size !== undefined) {
    if (typeof size === 'number') return { flexShrink: size }
    if (size) {
      return { flexShrink: 1 }
    }
  }
  return {}
}
