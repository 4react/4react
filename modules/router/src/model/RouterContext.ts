import { createContext } from 'react'

export interface RouterContextValue {}

const RouterContext = createContext<RouterContextValue>({})

export default RouterContext
