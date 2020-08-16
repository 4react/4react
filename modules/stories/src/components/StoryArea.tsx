import { parseSize, Size } from '@4react/syntax'
import { CSSProperties, FC } from 'react'
import styled from 'styled-components'
import { AreaPlaceholder, TextPlaceholder } from '../utils/style'

export interface StoryAreaProps {
  width?: Size
  height?: number | string
  className?: string
  style?: CSSProperties
}

export const StoryArea: FC<StoryAreaProps> = styled.div<StoryAreaProps>`
  position: relative;
  display: inline-flex;
  width: ${p => parseSize(p.width || '100%')};
  height: ${p => parseSize(p.height || '100%')};
  background-image: ${AreaPlaceholder};
  background-size: 56.57px 56.57px;
  justify-content: center;
  align-items: center;
  color: ${TextPlaceholder};
  overflow: hidden;
  user-select: none;
  font-family: Arial,serif;
  font-size: 14px;
`
