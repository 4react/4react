import { isObject } from '../primitives/object/object'

export interface BoundableValueObject<T> {
  base?: T
  min?: T
  max?: T
}

export const isBoundableValueObject = (
  value: any,
  tCheck?: (value: any) => boolean
): boolean => {
  const isT = (v: any) => !!tCheck && tCheck(v)

  return (
    isObject(value)
    && (
      ('base' in value && isT(value.base))
      || ('min' in value && isT(value.min))
      || ('max' in value && isT(value.max))
    )
  )
}


export type BoundableValue<T> = T | BoundableValueObject<T>

export const parseBoundableValue = <T>(
  size: BoundableValue<T>,
  tCheck?: (value: any) => boolean
): BoundableValueObject<T> => {
  if (isBoundableValueObject(size, tCheck)) {
    return size as BoundableValueObject<T>
  }

  if (!tCheck || tCheck(size)) {
    return { base: size as T }
  }

  return {}
}
