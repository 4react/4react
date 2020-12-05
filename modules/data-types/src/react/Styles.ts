import flattenDeep from 'lodash/flattenDeep'
import { CSSProperties } from 'react'

export type StyleItem = CSSProperties | false | null | undefined

export type Styles = StyleItem | (StyleItem | Styles)[]

export const parseStyle = (styles: Styles): CSSProperties => {
  const items = flattenDeep([styles])
  return items
    .filter(item => !!item)
    .reduce<CSSProperties>((res, item) => ({ ...res, ...item }), {})
}
