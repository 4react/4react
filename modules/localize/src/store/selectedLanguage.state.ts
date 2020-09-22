import { atom } from 'recoil'

export const selectedLanguageState: any = atom<string>({
  key: 'selectedLanguage',
  default: ''
})
