import { withKnobs } from '@storybook/addon-knobs'
import { DecoratorFunction } from '@storybook/addons'
import { addDecorator, addParameters } from '@storybook/react'

export interface PreviewConfigOptions {
  decorators?: DecoratorFunction<any>[]
}

export const configurePreview = <StoryFnReturnType = unknown>(options: PreviewConfigOptions) => {
  const {
    decorators = []
  } = options

  // decorators
  addDecorator(withKnobs)
  decorators.forEach(decorator => {
    // @ts-ignore
    addDecorator(decorator)
  })

  // parameters
  addParameters({
    knobs: {
      escapeHTML: false
    }
  })
}

export default configurePreview
