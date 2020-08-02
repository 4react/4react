import { storiesOf } from '@storybook/react'
import TryStory from './components/Try.story'
import errorFactoryStory from './methods/errorsFor.story'

storiesOf('Components', module)
  .add('Try', TryStory)
  .add('createErrorsFor', errorFactoryStory)
