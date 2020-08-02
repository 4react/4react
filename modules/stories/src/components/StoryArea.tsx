import React, { FC } from 'react'
import styled from 'styled-components'
import adaptSize from '../utils/adaptSize'
import { AreaPlaceholder, TextPlaceholder } from '../utils/style'

export interface StoryAreaProps {
  width: number | string,
  height: number | string,
  className: string
  style: object
}

export const StoryArea: FC<StoryAreaProps> = styled.div<StoryAreaProps>`
  position: relative;
  display: inline-flex;
  width: ${p => adaptSize(p.width)};
  height: ${p => adaptSize(p.height)};
  background-image: ${AreaPlaceholder};
  background-size: 56.57px 56.57px;
  justify-content: center;
  align-items: center;
  color: ${TextPlaceholder};
  overflow: hidden;
`

export default StoryArea
