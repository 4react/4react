import { Flex } from '@4react/flex'
import { StoryBackground } from '@4react/stories'
import React from 'react'
import { withSkeletonContext } from '../../../withSkeletonContext'
import { SkeletonArea } from './SkeletonArea'
import { SkeletonElement } from '../SkeletonElement/SkeletonElement'

export default {
  component: SkeletonArea,
  title: 'skeleton/SkeletonArea',
  decorators: [withSkeletonContext]
}

export const Basic = () => (
  <StoryBackground>
    <SkeletonArea width="fill">
      <Flex row>
        <Flex column>
          <SkeletonElement width={8} height={8} radius={4} />
          <SkeletonElement width={8} height={2} radius={2} margin={{ top: 1 }} />
          <SkeletonElement width={4} height={1} margin={{ top: 1 }} />
          <SkeletonElement width={4} height={1} margin={{ top: 1 }} />
        </Flex>
        <Flex column grow margin={{ left: 2 }}>
          <SkeletonElement width="fill" height={4} radius={2} margin={{ top: 2 }} />
          <Flex row grow={0} margin={{ top: 3 }}>
            <SkeletonElement width={6} height={6} radius={1} />
            <SkeletonElement grow width={12} height={6} radius={1} margin={{ left: 2 }} />
            <SkeletonElement width={6} height={6} radius={1} margin={{ left: 2 }} />
          </Flex>
        </Flex>
      </Flex>
    </SkeletonArea>
  </StoryBackground>
)
