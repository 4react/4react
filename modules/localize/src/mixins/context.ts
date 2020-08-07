import { createContext } from 'react'

interface LocalizationContextValue {
  defaultNS: string
}

const defaultValue: LocalizationContextValue = {
  defaultNS: 'translations'
}

const LocalizationContext = createContext<LocalizationContextValue>(defaultValue)

export default LocalizationContext
