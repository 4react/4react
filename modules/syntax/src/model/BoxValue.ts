export interface ParsedBoxValue<T> {
  top?: T
  left?: T
  right?: T
  bottom?: T
}

export interface BoxValueMap<T> {
  base?: T
  top?: T
  left?: T
  right?: T
  bottom?: T
}

const instanceOfBoxValueMap = (value: any) => (
  typeof value === 'object'
  && (
    'base' in value
    || 'top' in value
    || 'left' in value
    || 'right' in value
    || 'bottom' in value
  )
)

export type BoxValueArray<T> = [T] | [T, T] | [T, T, T] | [T, T, T, T]

export type BoxValue<T> = T | BoxValueArray<T> | BoxValueMap<T>

export const parseBoxValue = <T>(value: BoxValue<T>): ParsedBoxValue<T> => {
  if (Array.isArray(value)) {
    return {
      top: value[0],
      left: value[1] || value[0],
      right: value[3] || value[1] || value[0],
      bottom: value[2] || value[0]
    }
  }
  if (instanceOfBoxValueMap(value)) {
    const map = value as BoxValueMap<T>
    return {
      top: map?.top || map?.base,
      left: map?.left || map?.base,
      right: map?.right || map?.base,
      bottom: map?.bottom || map?.base
    }
  }
  return {
    top: value as T,
    left: value as T,
    right: value as T,
    bottom: value as T
  }
}
