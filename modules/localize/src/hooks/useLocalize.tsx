import React, { ReactNode } from 'react'
import { useRecoilValue } from 'recoil'
import { DEFAULT_NAMESPACE } from '..'
import { LocalizedFragment, LocalizedTransform } from '../components/LocalizedFragment/LocalizedFragment'
import { Label, parseLabel } from '../core/parseLabel'
import { TranslationFragment, TranslationFragmentType } from '../core/parseTranslation'
import { selectDictionary } from '../core/selectDictionary'
import { LocalizeData, selectTranslation } from '../core/selectTranslation'
import { fetchingState } from '../store/fetching.state'
import { LocalizationData, localizationDataState } from '../store/localizationData.state'
import { selectedLanguageState } from '../store/selectedLanguage.state'

export interface LocalizeOptions {
  language?: string
  namespace?: string
  transform?: LocalizedTransform
}

export const useLocalize = () => {
  const fetching = useRecoilValue<boolean>(fetchingState)
  const selectedLanguage = useRecoilValue<string>(selectedLanguageState)
  const localizationData = useRecoilValue<LocalizationData>(localizationDataState)

  const localize = (label: string, data: LocalizeData = {}, options: LocalizeOptions = {}): ReactNode => {
    if (fetching) return '' // label

    const parsedLabel: Label = parseLabel(label)
    const language = options.language || selectedLanguage || localizationData.languages[0]
    const namespace = options.namespace || parsedLabel.namespace || localizationData.namespaces[0] || DEFAULT_NAMESPACE

    const dictionary = selectDictionary(localizationData, language, namespace)
    const translation = selectTranslation(dictionary, parsedLabel.path, data)

    if (!translation) return label

    const renderFragment = (fragment: TranslationFragment) => {
      const { type, value } = fragment
      switch (type) {
        case TranslationFragmentType.TEXT:
          return value
        case TranslationFragmentType.FILLER:
          if (!(value in data)) {
            return '_'
          }
          return data[value]
        case TranslationFragmentType.LABEL:
          return localize(value, data, options)
        default:
          return '_'
      }
    }

    return translation.map(fragment => (
      <LocalizedFragment
        key={`${fragment.type}-${fragment.value}`}
        transform={options.transform}
      >
        {renderFragment(fragment)}
      </LocalizedFragment>
    ))
  }

  return localize
}
