import { createContext } from 'react'
import { UIConfig, defaultUIConfig } from './UIConfig'

export const UIConfigContext = createContext<UIConfig>(defaultUIConfig)
