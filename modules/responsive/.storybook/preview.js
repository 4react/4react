import { configurePreview } from '@4react/stories'
import withContext from './withContext'

configurePreview({
  name: '@4react/responsive',
  decorators: [withContext]
})
