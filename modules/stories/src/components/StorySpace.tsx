import React from 'react'
import styled from 'styled-components'

export interface StorySpaceProps {
  width: number | string,
  height: number | string,
  className: string
  style: object
}

const adaptSize = (size?: number | string) => {
  if (size) {
    if (typeof size === 'number') {
      return `${size}px`
    }
    return size
  }
  return '100%'
}

export const StorySpace = styled.div<StorySpaceProps>`
  position: relative;
  display: inline-flex;
  width: ${p => adaptSize(p.width)};
  height: ${p => adaptSize(p.height)};
  background-color: transparent;
`

export default StorySpace
