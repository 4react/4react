import { StoryArea, StoryBackground, StoryContent, StorySection } from '@4react/stories'
import { object, text } from '@storybook/addon-knobs'
import React from 'react'
import withResponsiveContext from '../../withResponsiveContext'
import useResponsive from './useResponsive'
import { useResponsiveInfo } from './useResponsiveInfo'

export default {
  method: useResponsive,
  title: 'responsive/useResponsive',
  decorators: [withResponsiveContext]
}

export const Basic = () => {
  const { current, width } = useResponsiveInfo()
  const property = useResponsive()
  const simpleProperty = property(text('simple', '300px', 'params'))
  const arrayProperty = property(object('array', ['100%', '380px', '650px'], 'params'))
  const complexProperty = property(object('complex', { mobile: '100%', tablet: '500px' }, 'params'))
  return (
    <StoryBackground fullscreen>
      <StorySection title="current">
        <StoryArea row>
          <StoryContent
            name={current}
            margin={8}
            padding={8}
          />
          <StoryContent
            name={`${width}px`}
            margin={8}
            padding={8}
          />
        </StoryArea>
      </StorySection>
      <StorySection title="simple">
        <StoryArea width={simpleProperty}>
          <StoryContent
            name={simpleProperty}
            margin={8}
            padding={8}
          />
        </StoryArea>
      </StorySection>
      <StorySection title="array">
        <StoryArea width={arrayProperty}>
          <StoryContent
            name={arrayProperty}
            margin={8}
            padding={8}
          />
        </StoryArea>
      </StorySection>
      <StorySection title="complex">
        <StoryArea width={complexProperty}>
          <StoryContent
            name={complexProperty}
            margin={8}
            padding={8}
          />
        </StoryArea>
      </StorySection>
    </StoryBackground>
  )
}
