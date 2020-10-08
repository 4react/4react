export const isArray = (value: any): boolean => (
  value instanceof Array
)

export const isArrayEmpty = (value: any[]): boolean => (
  value.length === 0
)
