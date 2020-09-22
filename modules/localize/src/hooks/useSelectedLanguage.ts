import { useRecoilValue } from 'recoil'
import { selectedLanguageState } from '../store/selectedLanguage.state'

export const useSelectedLanguage = () => useRecoilValue<string>(selectedLanguageState)
