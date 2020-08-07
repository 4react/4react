export const fullRegex = (pattern: string) => new RegExp(`^${pattern}$`)

export const globalRegex = (pattern: string) => new RegExp(pattern, 'g')

/**
 * Exec the full match of a string.
 * @param source The original string from which to extract matches.
 * @param regex The regular expression of the desired matching strings.
 */
export const match = (source: string, regex: string): RegExpExecArray | null => {
  return fullRegex(regex).exec(source)
}

/**
 * Extract every matching string from a source.
 * @param source The original string from which to extract matches.
 * @param regex The regular expression of the desired matching strings.
 */
export const matchAll = (source: string, regex: string): RegExpExecArray[] => {
  const gRegex = globalRegex(regex)
  const matches: RegExpExecArray[] = []
  let match
  while(match = gRegex.exec(source)) {
    matches.push(match)
  }
  return matches
}
