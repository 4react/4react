import { size, StoryBackground } from '@4react/stories'
import React from 'react'
import { SkeletonElement } from './SkeletonElement'
import { withSkeletonContext } from '../../../withSkeletonContext'
import { SkeletonArea } from '../SkeletonArea/SkeletonArea'

export default {
  component: SkeletonElement,
  title: 'skeleton/SkeletonElement',
  decorators: [withSkeletonContext]
}

export const Basic = () => {
  const props = {
    width: size('width', 'fill', 'props'),
    height: size('height', 32, 'props'),
    radius: size('radius', 16, 'props')
  }
  return (
    <StoryBackground>
      <SkeletonArea width="fill">
        <SkeletonElement {...props} />
      </SkeletonArea>
    </StoryBackground>
  )
}
