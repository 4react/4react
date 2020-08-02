import { StoryBackground } from '@4react/stories'
import React from 'react'
import errorsFor from './errorsFor'

const StoryError = errorsFor('@4react/story')

const ErrorsForStory = () => {
  const handleClick = () => {
    throw new StoryError(['ErrorsForStory', 'handleClick'], 'Custom error message')
  }

  return (
    <StoryBackground>
      <button onClick={handleClick}>THROW ERROR</button>
      <br />
      Open console to see the error.
    </StoryBackground>
  )
}

export default ErrorsForStory
