import { Flex } from '@4react/flex'
import { StoryBackground } from '@4react/stories'
import React from 'react'
import { SkeletonArea } from './SkeletonArea'
import { SkeletonElement } from '../SkeletonElement/SkeletonElement'

export default { title: 'SkeletonArea' }

export const Basic = () => (
  <StoryBackground>
    <SkeletonArea width="fill">
      <Flex row>
        <Flex column>
          <SkeletonElement width={4} height={4} radius={2} />
          <SkeletonElement width={4} height={1} radius={1} margin={{ top: 0.5 }} />
          <SkeletonElement width={2} height={0.5} margin={{ top: 0.5 }} />
          <SkeletonElement width={2} height={0.5} margin={{ top: 0.5 }} />
        </Flex>
        <Flex column grow margin={{ left: 1 }}>
          <SkeletonElement width="fill" height={2} radius={1} margin={{ top: 1 }} />
          <Flex row grow={0} margin={{ top: 1.5 }}>
            <SkeletonElement width={3} height={3} radius={0.5} />
            <SkeletonElement grow width={6} height={3} radius={0.5} margin={{ left: 1 }} />
            <SkeletonElement width={3} height={3} radius={0.5} margin={{ left: 1 }} />
            <SkeletonElement width={3} height={3} radius={0.5} margin={{ left: 1 }} />
          </Flex>
        </Flex>
      </Flex>
    </SkeletonArea>
  </StoryBackground>
)
