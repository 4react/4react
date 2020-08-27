import { StoryBackground } from '@4react/stories'
import React from 'react'
import errorsFor from './errorsFor'

export default {
  method: errorsFor,
  title: 'errors/errorsFor'
}

const StoryError = errorsFor('@4react/story')

const Basic = () => {
  const handleClick = () => {
    throw new StoryError('ErrorsForStory', 'handleClick', 'Custom error message')
  }

  return (
    <StoryBackground>
      <button onClick={handleClick}>THROW ERROR</button>
      <br />
      Open console to see the error.
    </StoryBackground>
  )
}
