import { on, StoryBackground } from '@4react/stories'
import { boolean } from '@storybook/addon-knobs'
import React, { useState } from 'react'
import Try from './Try'

const Fallback = ({ error }) => (
  <StoryBackground>
    <span>Error fallback: {error.message}</span>
  </StoryBackground>
)

const ErrorComponent = () => {
  const [hasError, setHasError] = useState(false)

  if (hasError) {
    throw new Error('Story Error')
  }

  return (
    <StoryBackground>
      <button onClick={() => setHasError(true)}>
        THROW ERROR
      </button>
    </StoryBackground>
  )
}

const TryStory = () => {
  const props = {
    fallback: boolean('fallback', true, 'props')
      ? error => <Fallback error={error} />
      : undefined,
    onError: on('error')
  }

  return (
    <Try {...props}>
      <StoryBackground>
        <ErrorComponent />
      </StoryBackground>
    </Try>
  )
}

export default TryStory
