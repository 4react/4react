import { useContext } from 'react'
import { SkeletonContext } from '../context/SkeletonContext'
import { SkeletonConfig } from '../model/SkeletonConfig'

export const useSkeletonConfig = (): SkeletonConfig => useContext(SkeletonContext)
