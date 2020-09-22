import { ItemOrList, parseItemOrList } from '../utils/ItemOrList'

export type ClassItem = string | false | undefined

export type ClassProp = ItemOrList<ClassItem>

export const composeClass = (prop: ClassProp): string => (
  parseItemOrList<ClassItem>(prop)
    .filter(item => !!item)
    .join(' ')
)
