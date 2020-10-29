import { isArray } from '../primitives/array'
import { isObject } from '../primitives/object'

export interface Box<T> {
  top?: T
  left?: T
  right?: T
  bottom?: T
}

export const isBox = (value: any): boolean => (
  isObject(value)
  && 'top' in value
  && 'left' in value
  && 'right' in value
  && 'bottom' in value
)

export interface DerivableBoxAsObject<T> {
  base?: T
  top?: T
  left?: T
  right?: T
  bottom?: T
}

export type DerivableBox<T> = T | T[] | DerivableBoxAsObject<T>

export const isDerivableBox = (value: any, tTypeCheck: (value: any) => boolean) => (
  isObject(value)
  || isArray(value)
  || tTypeCheck(value)
)

export const parseBox = <T>(value: DerivableBox<T>, isTCheck: (value: any) => boolean): Box<T> => {
  if (isObject(value)) {
    const obj = value as DerivableBoxAsObject<T>
    return {
      top: obj?.top || obj?.base,
      left: obj?.left || obj?.base,
      right: obj?.right || obj?.base,
      bottom: obj?.bottom || obj?.base
    }
  }

  if (isArray(value)) {
    const arr = value as T[]
    return {
      top: arr[0],
      left: arr[1] || arr[0],
      right: arr[3] || arr[1] || arr[0],
      bottom: arr[2] || arr[0]
    }
  }

  if (isTCheck(value)) {
    return {
      top: value as T,
      left: value as T,
      right: value as T,
      bottom: value as T
    }
  }

  return {}
}
