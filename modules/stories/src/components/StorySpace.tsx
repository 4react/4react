import { parseSize, Size } from '@4react/syntax'
import { CSSProperties } from 'react'
import styled from 'styled-components'

export interface StorySpaceProps {
  width?: Size
  height?: Size
  className?: string
  style?: CSSProperties
}

export const StorySpace = styled.div<StorySpaceProps>`
  position: relative;
  display: inline-flex;
  width: ${p => parseSize(p.width)};
  height: ${p => parseSize(p.height)};
  background-color: transparent;
`

StorySpace.defaultProps = {
  width: 1,
  height: 1
}
