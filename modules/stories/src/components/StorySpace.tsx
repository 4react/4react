import { CSSProperties } from 'react'
import styled from 'styled-components'
import adaptSize from '../utils/adaptSize'

export interface StorySpaceProps {
  width?: number | string
  height?: number | string
  className?: string
  style?: CSSProperties
}

export const StorySpace = styled.div<StorySpaceProps>`
  position: relative;
  display: inline-flex;
  width: ${p => adaptSize(p.width)};
  height: ${p => adaptSize(p.height)};
  background-color: transparent;
`

StorySpace.defaultProps = {
  width: 1,
  height: 1
}

export default StorySpace
