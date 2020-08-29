import { ElementRect, useSize } from '@4react/hooks'
import React, { FC, useMemo } from 'react'
import Breakpoints from '../model/Breakpoints'
import { BreakpointsMap, defaultBreakpointsMap } from '../model/BreakpointsMap'
import ResponsiveContext from '../model/ResponsiveContext'
import { ResponsiveContextValue } from '../model/ResponsiveContextValue'

export interface ResponsiveProviderProps {
  breakpoints?: BreakpointsMap
}

const ResponsiveProvider: FC<ResponsiveProviderProps> = props => {
  const {
    breakpoints: breakpointsMap = defaultBreakpointsMap,
    children
  } = props

  const rect: ElementRect | undefined = useSize()
  const breakpoints: Breakpoints = new Breakpoints(breakpointsMap)


  const context: ResponsiveContextValue = useMemo(() => {
    const width = rect?.width || 0
    let currentIndex = 0
    let current = 'default'
    if (width) {
      // find last breakpoint for which the min width is satisfied
      const lastValid = breakpoints.keys.reverse().find(k => width > breakpoints.valueOf(k))
      if (lastValid) {
        currentIndex = breakpoints.indexOf(lastValid)
        current = breakpoints.keys[currentIndex]
      }
    }

    const validKeys = currentIndex >= 0
      ? breakpoints.keys.slice(0, currentIndex + 1)
      : []

    return {
      breakpoints,
      width,
      current,
      validKeys
    }
  }, [rect?.width])

  return (
    <ResponsiveContext.Provider value={context}>
      {children}
    </ResponsiveContext.Provider>
  )
}

export default ResponsiveProvider
