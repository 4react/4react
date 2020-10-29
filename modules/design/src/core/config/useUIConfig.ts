import { useContext } from 'react'
import { defaultUIConfig } from './UIConfig'
import { UIConfigContext } from './UIConfigContext'

export const useUIConfig = () => useContext(UIConfigContext) || defaultUIConfig
