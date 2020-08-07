import { addDecorator, addParameters, configure } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import withContext from './decorators/withContext'

addDecorator(withContext)
addDecorator(withKnobs)

addParameters({
  options: {
    name: '@4react/localize',
    showPanel: true,
    panelPosition: 'right'
  },
  knobs: {
    escapeHTML: false
  }
})

configure(() => {
  require('./stories/_stories.js')
}, module)
