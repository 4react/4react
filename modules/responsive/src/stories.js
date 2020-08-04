import { storiesOf } from '@storybook/react'
import React from 'react'
import ResponsiveStory from './components/Responsive.story'
import UseResponsiveStory from './hooks/useResponsive.story'

storiesOf('stories/.', module)
  .add('Responsive', ResponsiveStory)
  .add('useResponsive', UseResponsiveStory)
