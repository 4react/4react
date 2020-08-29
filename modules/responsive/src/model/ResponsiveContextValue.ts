import Breakpoints from './Breakpoints'

export interface ResponsiveContextValue {
  breakpoints: Breakpoints
  width: number
  current: string
  validKeys: string[]
}
