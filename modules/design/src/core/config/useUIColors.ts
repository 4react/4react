import { useUIConfig } from './useUIConfig'

export const useUIColors = () => {
  const { theme } = useUIConfig()
  const { colors } = theme
  return colors
}
