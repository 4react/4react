import { useContext } from 'react'
import ResponsiveContext from '../model/ResponsiveContext'
import { ResponsiveContextValue } from '../model/ResponsiveContextValue'

export const useResponsive = () => useContext<ResponsiveContextValue>(ResponsiveContext)
