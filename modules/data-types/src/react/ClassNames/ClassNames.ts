import flattenDeep from 'lodash/flattenDeep'

export type ClassNameItem = string | false | null | undefined

export type ClassNames = ClassNameItem | (ClassNameItem | ClassNames)[]

export const parseClassName = (classNames: ClassNames): string => {
  const items = flattenDeep([classNames])
  return items
    .filter(item => !!item)
    .join(' ')
}
