import { useContext } from 'react'
import { DataTestFactory } from './DataTestFactory'
import { DataTestContext } from './DataTestContext'

export const useDataTest = (base: string): DataTestFactory => {
  const { renderDataTest = true } = useContext(DataTestContext) || {}
  const dt = new DataTestFactory(base)
  dt._renderDataTest = renderDataTest
  return dt
}
