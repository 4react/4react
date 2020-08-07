import React from 'react'
import { storiesOf } from '@storybook/react'
import BasicStory from './basic'
import TextNumberFillersStory from './textNumberFillers'
import ComponentFillersStory from './componentFillers'

storiesOf('stories/.', module)
  .add('basic', BasicStory)
  .add('text/number', TextNumberFillersStory)
  .add('components', ComponentFillersStory)
