import { Dictionary } from '../store/localizationData.state'
import { LocalizeError } from '../utils/errors'
import { Key, KeyContext, parseKey } from './parseKey'
import { LabelStep } from './parseLabel'
import { parseTranslation, Translation } from './parseTranslation'

export interface LocalizeData {
  [name: string]: any
}

export const selectTranslation = (
  dictionary: Dictionary,
  path: LabelStep[],
  data: LocalizeData
): Translation | undefined => {
  if (!path.length) {
    throw new LocalizeError('selectKeys', 'Path is empty.')
  }

  const [head, ...tail] = path
  const currentLevelKeys = Object.keys(dictionary)
  const stepData: KeyContext = {
    count: 0,
    ...head.context,
    ...data
  }

  let headKey
  let matchingContextLength = -1
  currentLevelKeys.forEach(k => {
    const key: Key = parseKey(k)
    if (key.name === head.name) {
      const contextKeys = Object.keys(key.context)
      if (
        contextKeys.length > matchingContextLength
        && contextKeys.every(contextKey => {
          // count
          if (contextKey === 'count') {
            return (
              key.context.count === stepData.count
              || (key.context.count === 'n' && stepData.count !== 1)
            )
          }
          return (
            contextKey in stepData
            && key.context[contextKey] === stepData[contextKey]
          )
        })
      ) {
        matchingContextLength = contextKeys.length
        headKey = k
      }
    }
  })

  if (!headKey) {
    throw new LocalizeError('selectTranslation', `Key not found`)
  }

  const value = dictionary[headKey]

  if (typeof value === 'object') {
    if (!tail.length) {
      throw new LocalizeError('selectTranslation', 'Invalid path')
    }
    return selectTranslation(value, tail, data)
  }

  if (tail.length) {
    throw new LocalizeError('selectTranslation', 'Invalid path')
  }
  return parseTranslation(value)
}
