import { configurePreview } from '@4react/stories'
import { withContext } from './context'

configurePreview({
  name: '@4react/design',
  decorators: [withContext]
})
