import { LocalizationData, Dictionaries, Dictionary } from '../store/localizationData.state'
import { LocalizeError } from '../utils/errors'
// eslint-disable-next-line @typescript-eslint/no-var-requires,@typescript-eslint/no-require-imports
const fetch = require('node-fetch')

export const DEFAULT_NAMESPACE = 'translations'

export interface LocalizationOptions {
  pattern?: string
}

const checkPattern = (pattern: string) => {
  if (!pattern.includes('{{language}}')) {
    throw new LocalizeError('initLocalization', '\'pattern\' must contain placeholder {{language}}.')
  }
  if (!pattern.includes('{{namespace}}')) {
    throw new LocalizeError('initLocalization', '\'pattern\' must contain placeholder {{namespace}}.')
  }
}

export interface FetchTranslationResult {
  lng: string
  ns: string
  json: Dictionary
}

const fetchTranslationsMap = async (
  pattern: string,
  languages: string[],
  namespaces: string[]
): Promise<Dictionaries> => {
  const promises: Promise<FetchTranslationResult>[] = []
  languages.forEach(lng => {
    namespaces.forEach(ns => {
      const path = pattern
        .replace('{{language}}', lng)
        .replace('{{namespace}}', ns)

      const filePromise = fetch(path)
        .then(async (res: Response) => res.json())
        .then((json: Dictionary) => ({ lng, ns, json }))

      promises.push(filePromise)
    })
  })

  return Promise.all(promises)
    .then((allRes: FetchTranslationResult[]): Dictionaries => (
      allRes.reduce<Dictionaries>((map: Dictionaries, res) => {
        if (!(res.lng in map)) {
          map[res.lng] = {}
        }
        map[res.lng][res.ns] = res.json
        return map
      }, {})
    ))
}

export const initLocalization = async (
  languages: string[],
  namespaces: string[] = [DEFAULT_NAMESPACE],
  options: LocalizationOptions = {}
): Promise<LocalizationData> => {
  const {
    pattern = '/locales/{{language}}/{{namespace}}.json'
  } = options

  checkPattern(pattern)

  const dictionaries: Dictionaries = await fetchTranslationsMap(pattern, languages, namespaces)

  return { languages, namespaces, dictionaries }
}
