import { useContext } from 'react'
import ResponsiveContext from '../model/ResponsiveContext'

const useCurrentBreakpoint = () => {
  const { current } = useContext(ResponsiveContext)
  return current
}

export default useCurrentBreakpoint
