import { config } from '@4react/stories'
import requireAll from '@4react/stories/src/methods/requireAll'
import { configure } from '@storybook/react'

config({
  name: 'errors'
})

configure(() => {
  requireAll('../src', true, /stories\.js/)
}, module)
