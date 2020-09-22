import React, { FC, useEffect } from 'react'
import { RecoilRoot, useSetRecoilState } from 'recoil'
import { initLocalization, LocalizationOptions } from '../../methods/initLocalization'
import { fetchingState } from '../../store/fetching.state'
import { LocalizationData, localizationDataState } from '../../store/localizationData.state'
import { selectedLanguageState } from '../../store/selectedLanguage.state'

interface LocalizationProps extends LocalizationOptions {
  languages: string[]
  namespaces?: string[]
}

const LocalizationInitializer = (props: LocalizationProps) => {
  const { languages, namespaces, ...options } = props
  const setFetching = useSetRecoilState<boolean>(fetchingState)
  const setSelectedLanguage = useSetRecoilState<string>(selectedLanguageState)
  const setLocalizationData = useSetRecoilState<LocalizationData>(localizationDataState)

  useEffect(() => {
    initLocalization(languages, namespaces, options)
      .then((localization: LocalizationData) => {
        setLocalizationData(localization)
        setSelectedLanguage(localization.languages[0])
        setFetching(false)
      })
  }, [])

  return null
}

const LocalizationProvider: FC<LocalizationProps> = props => {
  const { children, ...otherProps } = props

  return (
    <RecoilRoot>
      <LocalizationInitializer {...otherProps} />
      {children}
    </RecoilRoot>
  )
}

export default LocalizationProvider
