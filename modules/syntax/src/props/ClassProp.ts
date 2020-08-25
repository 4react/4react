export type ClassItem = string | false | undefined

export type ClassProp = ClassItem | ClassItem[]

export const parseClassProp = (prop: ClassProp): string => (
  (Array.isArray(prop) ? prop : [prop])
    .filter(item => !!item)
    .join(' ')
)
