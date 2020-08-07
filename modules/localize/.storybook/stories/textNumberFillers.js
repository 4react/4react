import language from '../knobs/language'
import { number, text } from '@storybook/addon-knobs'
import Localized from '../../src/components/Localized'
import React from 'react'

const TextNumberFillersStory = () => {
  const lang = language('lang', 'props')
  const name = text('fillers[name]', 'Matteo', 'props')
  const age = number('fillers[age]', 28, { min: 1 }, 'props')
  return (
    <Localized
      label="samples.text-numeric-fillers"
      lang={lang}
      fillers={{
        name: name,
        age: age
      }}
    />
  )
}

export default TextNumberFillersStory
