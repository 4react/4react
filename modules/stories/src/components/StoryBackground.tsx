import React from 'react'
import styled from 'styled-components'
import { BackgroundPlaceholder } from '../utils/style'

export interface StoryContainerProps {
  fullscreen: boolean
  color: string
  className: string
  style: object
}

export const StoryBackground = styled.div<StoryContainerProps>`
  box-sizing: border-box;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: ${p => p.color || BackgroundPlaceholder};
  margin: 0 auto;
  width: 100%;
  height: 100%;
  padding: ${p => (p.fullscreen ? 0 : 20)}px;
`

export default StoryBackground
