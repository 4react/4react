import { fullRegex } from '../utils/regex'
import { parseRoutePathStep, step, Step } from './Step'
import RouterError from '../utils/errors'

export type Path = Step[]

const path = `${step}(?:\\/${step})*`

export const parseRoutePath = (source: string): Path => {
  if (source === '') {
    return []
  }

  if (!fullRegex(path).test(source)) {
    throw new RouterError('parseRoutePath', 'Invalid path')
  }

  return source
    .split('/')
    .map(parseRoutePathStep)
}
