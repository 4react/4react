import { BoxValue, BoxValueMap } from './BoxValue'

export interface BoundedValueMap<T> {
  base?: T
  min?: T
  max?: T
}

const instanceOfBoundedValueMap = (value: any): boolean => (
  typeof value === 'object'
  && (
    'base' in value
    || 'min' in value
    || 'max' in value
  )
)

export type BoundedValue<T> = T | BoundedValueMap<T>

export const parseBoundedValue = <T>(value: BoxValue<T>): BoundedValueMap<T> => {
  if (instanceOfBoundedValueMap(value)) {
    return value as BoxValueMap<T>
  }
  return {
    base: value as T
  }
}
