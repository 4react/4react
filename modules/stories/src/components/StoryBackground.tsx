import { CSSProperties } from 'react'
import styled from 'styled-components'
import { BackgroundPlaceholder } from '../utils/style'

export interface StoryBackgroundProps {
  fullscreen?: boolean
  color?: string
  className?: string
  style?: CSSProperties
}

export const StoryBackground = styled.div<StoryBackgroundProps>`
  box-sizing: border-box;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: ${p => p.color};
  margin: 0 auto;
  width: 100%;
  height: 100%;
  padding: ${p => (p.fullscreen ? 0 : 20)}px;
`

StoryBackground.defaultProps = {
  fullscreen: false,
  color: BackgroundPlaceholder
}
