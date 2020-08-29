import { StoryBackground, StoryContent, StoryContentStatus, StorySection } from '@4react/stories'
import { object, text } from '@storybook/addon-knobs'
import React from 'react'
import withResponsiveContext from '../../withResponsiveContext'
import { useResponsive } from './useResponsive'
import useResponsiveCondition from './useResponsiveCondition'

export default {
  method: useResponsiveCondition,
  title: 'responsive/useResponsiveCondition',
  decorators: [withResponsiveContext]
}

export const Basic = () => {
  const simpleCondition = text('simple', 'mobile', 'params')
  const arrayCondition = object('array', ['mobile', 'desktop'], 'params')
  const complexCondition = object('complex', { min: 'tablet', max: 'tablet' }, 'params')

  const simpleFulfilled = useResponsiveCondition(simpleCondition)
  const arrayFulfilled = useResponsiveCondition(arrayCondition)
  const complexFulfilled = useResponsiveCondition(complexCondition)
  const { current } = useResponsive()

  const renderCondition = (condition, fulfilled) => (
    <StorySection title={JSON.stringify(condition)}>
      <StoryContent
        name={fulfilled ? 'FULFILLED' : 'NOT FULFILLED'}
        status={fulfilled ? StoryContentStatus.POSITIVE : StoryContentStatus.NEGATIVE}
        padding={16}
      />
    </StorySection>
  )

  return (
    <StoryBackground>
      <StorySection title="current">
        <StoryContent name={current} padding={8} />
      </StorySection>
      {renderCondition(simpleCondition, simpleFulfilled)}
      {renderCondition(arrayCondition, arrayFulfilled)}
      {renderCondition(complexCondition, complexFulfilled)}
    </StoryBackground>
  )
}
