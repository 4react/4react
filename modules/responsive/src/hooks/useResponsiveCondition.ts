import Breakpoints from '../model/Breakpoints'
import { useResponsive } from './useResponsive'

export interface BreakpointConditionRange {
  min?: string
  max?: string
}

export type BreakpointCondition = string | string[] | BreakpointConditionRange

const parseConditionTargets = (condition: BreakpointCondition, breakpoints: Breakpoints): string[] => {
  if (Array.isArray(condition)) {
    return condition as string[]
  }

  if (typeof condition === 'object') {
    const range = condition as BreakpointConditionRange
    const startIndex = range.min
      ? breakpoints.indexOf(range.min)
      : 0
    const endIndex = range.max
      ? breakpoints.indexOf(range.max)
      : breakpoints.keys.length - 1

    return breakpoints.keys.slice(startIndex, endIndex + 1)
  }

  return [condition as string]
}

const useResponsiveCondition = (condition: BreakpointCondition): boolean => {
  const { breakpoints, current } = useResponsive()
  if (!current) return false
  const targets: string[] = parseConditionTargets(condition, breakpoints)

  return targets.includes(current)
}

export default useResponsiveCondition
