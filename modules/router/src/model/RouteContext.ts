import { createContext } from 'react'
import { Match } from './Match'

export interface RouteContextValue {
  match: Match
}

const RouteContext = createContext<RouteContextValue>({
  match: {
    params: {},
    matched: [],
    toMatch: []
  }
})

export default RouteContext
