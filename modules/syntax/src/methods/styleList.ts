import { CSSProperties } from 'react'

export type ConditionalStyle = [CSSProperties | undefined, boolean]

/**
 * Compose a list of styles conditionally.
 * @param styles
 *
 * @example
 * * styleList(
 * *   { ... },
 * *   [{ ... }, condition]
 * * )
 */
export const styleList = (...styles: (CSSProperties | ConditionalStyle | undefined)[]): CSSProperties => (
  (styles || [])
    .map<CSSProperties | undefined>(item => {
      if (Array.isArray(item)) {
        if ((item as [CSSProperties, boolean])[1]) {
          return (item as [CSSProperties, boolean])[0]
        }
      }
      return item as CSSProperties
    })
    .filter(item => item !== undefined)
    .reduce<CSSProperties>((res, item) => ({ ...res, ...item }), {})
)
