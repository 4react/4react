import { CSSProperties } from 'react'
import { ItemOrList, parseItemOrList } from '../utils/ItemOrList'

export type StyleItem = CSSProperties | false | undefined

export type StyleProp = ItemOrList<StyleItem>

export const composeStyle = (prop: StyleProp): CSSProperties => (
  parseItemOrList<StyleItem>(prop)
    .filter(item => !!item)
    .reduce<CSSProperties>((res, item) => ({ ...res, ...item }), {})
)
