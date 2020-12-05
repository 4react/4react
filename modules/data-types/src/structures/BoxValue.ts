import { isArray } from '../primitives/array/array'
import { isObject } from '../primitives/object/object'

export interface BoxValueObject<T> {
  base?: T
  top?: T
  left?: T
  right?: T
  bottom?: T
}

export const isBoxValueObject = (
  value: any,
  tCheck: (v: any) => boolean
): boolean => (
  isObject(value)
  && (
    ('base' in value && tCheck(value.base))
    || ('top' in value && tCheck(value.top))
    || ('left' in value && tCheck(value.left))
    || ('right' in value && tCheck(value.right))
    || ('bottom' in value && tCheck(value.bottom))
  )
)

export const isBoxValueArray = (
  value: any,
  tCheck: (v: any) => boolean
): boolean => (
  isArray(value)
  && (value as any[]).length <= 4
  && (value as any[]).every(tCheck)
)

export type BoxValue<T> = T | T[] | BoxValueObject<T>

export const isBoxValue = <T>(
  value: any,
  tCheck: (v: any) => boolean
) => (
  isBoxValueObject(value, tCheck)
  || isBoxValueArray(value, tCheck)
  || tCheck(value)
)

export const parseBoxValue = <T>(
  value: BoxValue<T>,
  tCheck: (v: any) => boolean
): BoxValueObject<T> => {
  if (isBoxValueObject(value, tCheck)) {
    const obj = value as BoxValueObject<T>
    return {
      top: obj?.top || obj?.base,
      left: obj?.left || obj?.base,
      right: obj?.right || obj?.base,
      bottom: obj?.bottom || obj?.base
    }
  }

  if (isBoxValueArray(value, tCheck)) {
    const arr = value as T[]
    switch (arr.length) {
      case 1:
        return {
          top: arr[0],
          left: arr[0],
          right: arr[0],
          bottom: arr[0]
        }
      case 2:
        return {
          top: arr[0],
          left: arr[1],
          right: arr[1],
          bottom: arr[0]
        }
      case 3:
        return {
          top: arr[0],
          left: arr[1],
          right: arr[1],
          bottom: arr[2]
        }
      case 4:
        return {
          top: arr[0],
          left: arr[3],
          right: arr[1],
          bottom: arr[2]
        }
      default:
        return {}
    }
  }

  if (tCheck(value)) {
    return {
      top: value as T,
      left: value as T,
      right: value as T,
      bottom: value as T
    }
  }

  return {}
}
