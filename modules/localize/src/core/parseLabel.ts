import { KeyContext, parseKeyContext } from './parseKey'
import { LocalizeError } from '../utils/errors'

export interface LabelStep {
  name: string
  context: KeyContext
}

export interface Label {
  namespace: string
  path: LabelStep[]
}

const parseLabelStep = (step: string): LabelStep => {
  const [name, ...contextVars] = step.split('_')
  const context: KeyContext = parseKeyContext(contextVars)
  return { name, context }
}

export const parseLabel = (label: string): Label => {
  const match = /((?<namespace>\w+):)?(?<path>\w+(\.\w+)*)/.exec(label)
  if (!match) {
    throw new LocalizeError('parseLabel', `Invalid label ${label}`)
  }

  const { groups = {} } = match
  const { namespace, path } = groups

  return {
    namespace: namespace,
    path: path.split('.').map(parseLabelStep)
  }
}
