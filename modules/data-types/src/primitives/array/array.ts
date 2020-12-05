/**
 * Checks if the value is of type array.
 * @param value The value to check.
 */
export const isArray = (value: any): boolean => (
  value instanceof Array
)

/**
 * Checks if the array is empty.
 * @param value The array to check.
 */
export const isArrayEmpty = (value: any[]): boolean => (
  value.length === 0
)
