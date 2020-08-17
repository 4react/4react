import { configurePreview } from '@4react/config/storybook'
import { withGlobalStyle } from '@4react/stories'
import { withContext } from './context'

configurePreview({
  decorators: [withGlobalStyle, withContext]
})
