export type ConditionalClass = [string, boolean]

/**
 * Compose a list of classes conditionally.
 * @param names
 *
 * @example
 * * classes(
 * *   'foo',
 * *   ['bar', barCondition]
 * * )
 */
export const className = (...names: (string | ConditionalClass | undefined)[]): string => (
  (names || [])
    .filter(name => name !== undefined)
    .map(item => {
      if (typeof item === 'string') {
        return item
      }
      if (Array.isArray(item)) {
        if ((item as [string, boolean])[1]) {
          return (item as [string, boolean])[0]
        }
      }
      return undefined
    })
    .filter(item => item !== undefined)
    .join(' ')
)
