import React, { FC, useEffect, useMemo, useState } from 'react'
import ResponsiveContext from '../model/ResponsiveContext'
import ResponsiveContextValue from '../model/ResponsiveContextValue'
import detectBreakpointChange from '../utils/detectBreakpointChange'
import Breakpoints from '../model/Breakpoints'
import BreakpointsMap, { defaultBreakpoints } from '../model/BreakpointsMap'

export interface ResponsiveProviderProps {
  breakpoints?: BreakpointsMap
}

const ResponsiveProvider: FC<ResponsiveProviderProps> = (props) => {
  const {
    breakpoints: rowBreakpoints = defaultBreakpoints,
    children
  } = props

  const breakpoints: Breakpoints = new Breakpoints(rowBreakpoints)
  const [current, setCurrent] = useState<string>('')

  useEffect(() => {
    detectBreakpointChange(breakpoints, setCurrent)
  }, [])

  const context: ResponsiveContextValue = useMemo(() => {
    const validIndex =  breakpoints.indexOf(current)
    const validKeys = validIndex >= 0
      ? breakpoints.keys.slice(0, breakpoints.indexOf(current) + 1)
      : []

    return {
      breakpoints,
      current,
      validKeys
    }
  }, [current])

  return (
    <ResponsiveContext.Provider value={context}>
      {children}
    </ResponsiveContext.Provider>
  )
}

export default ResponsiveProvider
