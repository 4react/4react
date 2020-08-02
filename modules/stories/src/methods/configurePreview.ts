import { withKnobs } from '@storybook/addon-knobs'
import { DecoratorFunction } from '@storybook/addons/dist/types'
import { addDecorator, addParameters } from '@storybook/react'

export interface PreviewConfigOptions {
  name?: string
  decorators?: DecoratorFunction<any>[]
}

export const configurePreview = (options: PreviewConfigOptions) => {
  const {
    name = '',
    decorators = []
  } = options

  // decorators
  addDecorator(withKnobs)
  decorators.forEach(decorator => {
    addDecorator(decorator)
  })

  // parameters
  addParameters({
    options: {
      name: name,
      showPanel: true,
      panelPosition: 'right'
    },
    knobs: {
      escapeHTML: false
    }
  })
}

export default configurePreview
