export type ItemOrList<T> = T | T[]

export const parseItemOrList = <T>(items?: ItemOrList<T>): T[] => {
  if (!items) return []
  return Array.isArray(items) ? items : [items]
}
