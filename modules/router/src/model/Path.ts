import { fullRegex } from '../utils/regex'
import { parseRoutePathStep, step, Step } from './Step'
import error from '../utils/errors'

export type Path = Step[]

const path = `${step}(?:\\/${step})*`

export const parseRoutePath = (source: string): Path => {
  if (source === '') {
    return []
  }

  if (!fullRegex(path).test(source)) {
    error('parseRoutePath', 'Invalid path')
  }

  return source
    .split('/')
    .map(parseRoutePathStep)
}
