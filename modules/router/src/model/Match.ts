import { Location } from './Location'
import { Path } from './Path'
import { MatchParams } from './MatchParams'

export interface Match {
  params: MatchParams
  matched: Location
  toMatch: Location
}

export interface MatchOptions {
  leaf?: boolean
}

export const matchPath = (path: Path, previousMatch: Match, options: MatchOptions = {}): Match | false => {
  const { leaf = false } = options
  const matchLength = path.length
  if (matchLength > previousMatch.toMatch.length) return false

  const params: MatchParams = { ...previousMatch.params }
  const matched = [...previousMatch.matched, ...previousMatch.toMatch.slice(0, matchLength)]
  const toMatch = leaf ? [] : [...previousMatch.toMatch.slice(matchLength)]

  for (let i = 0; i < path.length; i++) {
    const step = path[i]
    const valueToMatch = previousMatch.toMatch[i]

    if (step.regex && !step.regex.test(valueToMatch)) {
      return false
    }

    if (step.value && step.value !== valueToMatch) {
      return false
    }

    if (step.name) {
      params[step.name] = valueToMatch
    }
  }

  return { params, matched, toMatch }
}
