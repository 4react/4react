import { Size } from '@4react/syntax'
import { text } from '@storybook/addon-knobs'

export const size = (name: string, defaultValue: Size, groupId: string): Size => {
  const value = text(name, String(defaultValue), groupId)
  return Number(value) || value
}
