import React, { FC, ReactChildren } from 'react'
import { Match } from '../model/Match'
import { MatchParams } from '../model/MatchParams'
import useMatch from '../hooks/useMatch'
import RouteContext from '../model/RouteContext'
import isFunction from '../utils/isFunction'

export interface RouteProps {
  /** The path to match for this route to be render. */
  path?: string
  /** Asserts that the route must match exactly the remaining part of the location. */
  exact?: boolean
  /** Asserts that this route will be considered a leaf. Any inner route will be trunked. */
  leaf?: boolean
  /** A component to render in case of path match. */
  component?: React.ComponentType<MatchParams>
  /** A render function in case of path match. */
  render?: React.ReactChildren | ((params: MatchParams) => ReactChildren)
}

const Route: FC<RouteProps> = (props) => {
  const {
    path = '',
    exact = false,
    leaf = false,
    component: ComponentToRender,
    render,
    children
  } = props

  const match = useMatch(path, { leaf })
  if (!match) return null

  if (exact && match.toMatch.length) return null

  // TODO: update url based on options

  const renderContent = (match: Match) => {
    if (render) {
      if (isFunction(render)) {
        return (render as Function)(match.params)
      }
      return render
    }

    if (ComponentToRender) {
      return <ComponentToRender {...match.params} />
    }

    return null
  }

  return (
    <RouteContext.Provider value={{ match }}>
      <>
        {renderContent(match)}
        {children}
      </>
    </RouteContext.Provider>
  )
}

export default Route
