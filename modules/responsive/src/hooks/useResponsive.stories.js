import { StoryArea, StoryBackground, StoryContent, StorySection } from '@4react/stories'
import React from 'react'
import withResponsiveContext from '../../withResponsiveContext'
import { useResponsive } from './useResponsive'

export default {
  method: useResponsive,
  title: 'responsive/useResponsive',
  decorators: [withResponsiveContext]
}

export const Basic = () => {
  const { width, current, validKeys } = useResponsive()
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
