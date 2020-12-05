/**
 * Checks if the value is of type number.
 * @param value The value to check.
 */
export const isString = (value: any): boolean => (
  typeof value === 'string'
)

/**
 * Checks if the string is empty.
 * @param value The string to check.
 */
export const isStringEmpty = (value: string): boolean => (
  value === ''
)
