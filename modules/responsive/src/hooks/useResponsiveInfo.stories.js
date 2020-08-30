import { StoryArea, StoryBackground, StoryContent, StorySection } from '@4react/stories'
import React from 'react'
import withResponsiveContext from '../../withResponsiveContext'
import { useResponsiveInfo } from './useResponsiveInfo'

export default {
  method: useResponsiveInfo,
  title: 'responsive/useResponsiveInfo',
  decorators: [withResponsiveContext]
}

export const Basic = () => {
  const { width, current, validKeys } = useResponsiveInfo()
  return (
    <StoryBackground>
      <StorySection title="width">
        <StoryContent
          name={width}
          margin={8}
          padding={8}
        />
      </StorySection>
      <StorySection title="current">
        <StoryContent
          name={current}
          margin={8}
          padding={8}
        />
      </StorySection>
      <StorySection title="validKeys">
        <StoryArea row>
          {validKeys.map(validKey => (
            <StoryContent
              key={validKey}
              name={validKey}
              margin={8}
              padding={8}
            />
          ))}
        </StoryArea>
      </StorySection>
    </StoryBackground>
  )
}
