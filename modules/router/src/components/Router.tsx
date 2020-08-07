import React, { FC } from 'react'
import { Location, parseLocation } from '../model/Location'
import { Match } from '../model/Match'
import RouteContext from '../model/RouteContext'
import RouterContext from '../model/RouterContext'

export interface RouterProps {}

const Router: FC<RouterProps> = props => {
  const { children } = props

  const path: Location = parseLocation(window.location.pathname)
  const match: Match = {
    params: {},
    matched: [],
    toMatch: path
  }

  return (
    <RouterContext.Provider value={{}}>
      <RouteContext.Provider value={{ match }}>
        <>
          {children}
        </>
      </RouteContext.Provider>
    </RouterContext.Provider>
  )
}

export default Router
