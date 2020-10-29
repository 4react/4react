import { createContext } from 'react'

export interface DataTestContextValue {
  renderDataTest: boolean
}

export const DataTestContext = createContext<DataTestContextValue>({
  renderDataTest: false
})
