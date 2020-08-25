import { CSSProperties } from 'react'

export type StyleItem = CSSProperties | false | undefined

export type StyleProp = StyleItem | StyleItem[]

export const composeStyleItems = (prop: StyleProp): CSSProperties => (
  (Array.isArray(prop) ? prop : [prop])
    .filter(item => !!item)
    .reduce<CSSProperties>((res, item) => ({ ...res, ...item }), {})
)
