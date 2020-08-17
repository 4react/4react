import { createContext } from 'react'
import { defaultConfig, SkeletonConfig } from '../model/SkeletonConfig'

export const SkeletonContext = createContext<SkeletonConfig>(defaultConfig)
