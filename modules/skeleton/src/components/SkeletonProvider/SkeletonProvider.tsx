import React, { FC } from 'react'
import { SkeletonContext } from '../../context/SkeletonContext'
import { SkeletonConfig } from '../../model/SkeletonConfig'

export interface SkeletonProviderProps {
  config: SkeletonConfig
}

export const SkeletonProvider: FC<SkeletonProviderProps> = props => {
  const { config, children } = props

  return (
    <SkeletonContext.Provider value={config}>
      {children}
    </SkeletonContext.Provider>
  )
}
