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
          <SkeletonElement width={64} height={64} radius={32} />
          <SkeletonElement width={64} height={16} radius={8} margin={{ top: 8 }} />
          <SkeletonElement width={32} height={8} margin={{ top: 8 }} />
          <SkeletonElement width={32} height={8} margin={{ top: 8 }} />
        </Flex>
        <Flex column grow margin={{ left: 16 }}>
          <SkeletonElement width="fill" height={32} radius={16} margin={{ top: 16 }} />
          <Flex row grow={0} margin={{ top: 24 }}>
            <SkeletonElement grow width={12} height={48} radius={8} />
            <SkeletonElement width={32} height={48} radius={8} margin={{ left: 16 }} />
            <SkeletonElement width={32} height={48} radius={8} margin={{ left: 16 }} />
          </Flex>
        </Flex>
      </Flex>
    </SkeletonArea>
  </StoryBackground>
)
