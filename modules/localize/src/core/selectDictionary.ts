import { Dictionary, LocalizationData } from '../store/localizationData.state'
import { LocalizeError } from '../utils/errors'

export const selectDictionary = (
  localizationData: LocalizationData,
  language: string,
  namespace: string
): Dictionary => {
  const { dictionaries, languages, namespaces } = localizationData

  if (!languages.includes(language)) {
    throw new LocalizeError('localize', 'Unknown language.')
  }

  if (!namespaces.includes(namespace)) {
    throw new LocalizeError('localize', 'Unknown namespace.')
  }

  return dictionaries[language][namespace]
}
