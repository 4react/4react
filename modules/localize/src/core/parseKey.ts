import { LocalizeError } from '../utils/errors'

export interface KeyContext {
  [key: string]: number | string | undefined
  context?: string
  count?: number | string
}

export interface Key {
  name: string
  context: KeyContext
}

export const parseKeyContext = (vars: string[]): KeyContext => {
  const keyContext: KeyContext = {}

  vars.forEach(v => {
    let match = null
    // named context
    if ((match = /(?<name>[a-zA-Z0-9]+):(?<value>[a-zA-Z0-9]+)/.exec(v)) !== null) {
      const { groups = {} } = match
      const { name, value } = groups
      keyContext[name] = value
    }
    // count context
    else if ((match = /([0-9]+|n)/.exec(v)) !== null) {
      const [count] = match
      if (count === 'n') {
        keyContext.count = count
      }
      else if (!Number.isNaN(count)) {
        keyContext.count = Number(count)
      }
      else {
        throw new LocalizeError('parseKeyContext', 'Invalid "count" context')
      }
    }
    // generic context
    else if ((match = /(?<name>[a-zA-Z0-9]+)/.exec(v)) !== null) {
      const [context] = match
      keyContext.context = context
    }
    else {
      throw new LocalizeError('parseKeyContext', `Invalid context variable: ${v}`)
    }
  })

  return keyContext
}

export const parseKey = (key: string): Key => {
  const [name, ...contextVars] = key.split('_')
  const context: KeyContext = parseKeyContext(contextVars)
  return { name, context }
}
