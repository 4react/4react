import { useSetRecoilState } from 'recoil'
import { selectedLanguageState } from '../store/selectedLanguage.state'

export const useChangeLanguage = () => {
  const setSelectedLanguage = useSetRecoilState<string>(selectedLanguageState)

  return (language: string) => setSelectedLanguage(language)
}
