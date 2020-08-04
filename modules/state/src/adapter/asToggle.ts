import { UseState } from '../types'

export type AsToggle = [boolean, () => void]

/**
 * Adapts a state of type toggle (boolean).
 * @param state The result of an useState call.
 *
 * @example
 * * const [isOpen, toggleOpen] = asToggle(useState(false))
 */
export const asToggle = (state: UseState<boolean>): AsToggle => {
  const [value, setValue] = state
  const toggle = () => setValue(prev => !prev)
  return [value, toggle]
}

export default asToggle
