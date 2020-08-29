import { createContext } from 'react'
import Breakpoints from './Breakpoints'
import { ResponsiveContextValue } from './ResponsiveContextValue'

const ResponsiveContext = createContext<ResponsiveContextValue>({
  breakpoints: new Breakpoints({}),
  width: 0,
  current: '',
  validKeys: []
})

export default ResponsiveContext
