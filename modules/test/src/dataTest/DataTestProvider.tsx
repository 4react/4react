import React, { FC } from 'react'
import { DataTestContext, DataTestContextValue } from './DataTestContext'

export const DataTestProvider: FC<DataTestContextValue> = props => {
  const { children, ...value } = props
  return (
    <DataTestContext.Provider value={value}>
      {children}
    </DataTestContext.Provider>
  )
}
