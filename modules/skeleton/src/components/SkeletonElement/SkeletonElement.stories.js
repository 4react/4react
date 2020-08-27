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
    height: size('height', 4, 'props'),
    radius: size('radius', 2, 'props')
  }
  return (
    <StoryBackground>
      <SkeletonArea width="fill">
        <SkeletonElement {...props} />
      </SkeletonArea>
    </StoryBackground>
  )
}
