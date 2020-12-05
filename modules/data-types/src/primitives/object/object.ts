import { isArray } from '../array/array'

export const isObject = (value: any): boolean => (
  typeof value === 'object'
  && value !== null
  && !isArray(value)
)

export const isObjectEmpty = (value: Record<any, any>): boolean => (
  Object.keys(value).length === 0
)

export const hasObjectKey = (value: Record<any, any>, key: string): boolean => (
  key in value
)
