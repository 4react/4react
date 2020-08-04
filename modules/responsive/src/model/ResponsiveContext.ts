import { createContext } from 'react'
import Breakpoints from './Breakpoints'
import ResponsiveContextValue from './ResponsiveContextValue'

const ResponsiveContext = createContext<ResponsiveContextValue>({
  breakpoints: new Breakpoints({}),
  current: '',
  validKeys: []
})

export default ResponsiveContext
