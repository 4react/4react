import { isBoolean, isNumber } from '@4react/data-types'

export type FlexSize = boolean | number

export const parseFlexSize = (size?: FlexSize): number | undefined => {
  if (size) {
    if (isNumber(size)) return size as number
    if (isBoolean(size)) return size ? 1 : undefined
  }
  return undefined
}
