import { isNumber, isString } from '@4react/data-types'

export type Size = number | string

export const isSize = (value: any): boolean => (
  isNumber(value) || isString(value)
)
