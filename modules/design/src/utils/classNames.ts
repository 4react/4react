export type ConditionalClass = [string, boolean]

/**
 * Compose a list of classes conditionally.
 * @param classNames
 *
 * @example
 * * classes(
 * *   'foo',
 * *   ['bar', barCondition]
 * * )
 */
const classNames = (...classNames: (string | ConditionalClass | undefined)[]): string => (
  classNames
    .map(item => {
      if (typeof item === 'string') {
        return item
      }
      if (Array.isArray(item)) {
        if ((item as ConditionalClass)[1]) {
          return (item as ConditionalClass)[0]
        }
      }
      return undefined
    })
    .filter(item => item !== undefined)
    .join(' ')
)

export default classNames
