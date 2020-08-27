import { text } from '@storybook/addon-knobs'
import React from 'react'
import Route from './Route'
import { matchPath, parseLocation, parseRoutePath } from '../index'

export default {
  component: Route,
  title: 'routers/Route'
}

export const Basic = () => {
  const props = {
    path: text('path (route)', 'order/:trackingId=[0-9]+/:section', 'props'),
    pathname: text('pathname (location)', 'order/123456/details', 'props')
  }

  const routeSteps = parseRoutePath(props.path)
  const utlSteps = parseLocation(props.pathname)

  const match = matchPath(routeSteps, {
    params: {},
    matched: [],
    toMatch: utlSteps
  })

  const renderRouteStep = (step, index) => (
    <div key={index}>
      step {index}:&nbsp;
      {step.name && (<span>name: {step.name}&nbsp;</span>)}
      {step.value && (<span>value: {step.value}&nbsp;</span>)}
      {step.regex && (<span>regex: {step.regex.toString()}&nbsp;</span>)}
    </div>
  )

  try {
    return (
      <div>
        <h2>ROUTE</h2>
        {routeSteps.map(renderRouteStep)}
        <h2>LOCATION</h2>
        {utlSteps.map(step => (
          <div>
            {JSON.stringify(step)}
          </div>
        ))}
        <h2>MATCH</h2>
        <div>PARAMS: {JSON.stringify(match.params)}</div>
        <div>MATCHED: {JSON.stringify(match.matched)}</div>
        <div>TO MATCH: {JSON.stringify(match.toMatch)}</div>
      </div>
    )
  } catch (e) {
    return 'error'
  }
}
