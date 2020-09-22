import { atom } from 'recoil'

export interface Dictionary {
  [key: string]: string | Dictionary
}

export interface Dictionaries {
  [lng: string]: {
    [ns: string]: Dictionary
  }
}

export interface LocalizationData {
  languages: string[]
  namespaces: string[]
  dictionaries: Dictionaries
}

export const localizationDataState: any = atom<LocalizationData>({
  key: 'localizationData',
  default: {
    languages: [],
    namespaces: [],
    dictionaries: {}
  }
})
