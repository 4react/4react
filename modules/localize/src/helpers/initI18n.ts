import i18n, { InitOptions } from 'i18next'
import { initReactI18next } from 'react-i18next'
import I18nextBrowserLanguageDetector from 'i18next-browser-languagedetector'
import I18NextXhrBackend from 'i18next-xhr-backend'
import merge from 'lodash/merge'

const initI18n = async (
  languages: string[] = ['en'],
  namespaces: string[] = ['translations'],
  customOptions: InitOptions = {}
) => {
  const defaultOptions = {
    backend: {
      loadPath: `/locales/{{lng}}/{{ns}}.json`,
      allowMultiLoading: true
    },
    load: 'languageOnly',
    fallbackLng: languages[0],
    preload: languages,
    ns: namespaces,
    react: {
      useSuspense: false
    }
  }
  const options = merge(defaultOptions, customOptions)
  return i18n
    .use(I18nextBrowserLanguageDetector)
    .use(I18NextXhrBackend)
    .use(initReactI18next)
    .init(options)
}

export default initI18n
