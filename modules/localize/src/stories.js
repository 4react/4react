import { number, select, text } from '@storybook/addon-knobs'
import React from 'react'
import Localized from './components/Localized'
import withLocalizeContext from '../withLocalizeContext'

export default {
  title: 'localize/localize',
  decorators: [withLocalizeContext]
}

const language = (name, groupId) => select(name, ['en', 'it'], 'en', groupId)

export const Basic = () => {
  const lang = language('lang', 'props')
  return (
    <Localized
      label="samples.basic"
      lang={lang}
    />
  )
}

export const TextOrNumberFillers = () => {
  const lang = language('lang', 'props')
  const name = text('fillers[name]', 'Matteo', 'props')
  const age = number('fillers[age]', 28, { min: 1 }, 'props')
  return (
    <Localized
      label="samples.text-numeric-fillers"
      lang={lang}
      fillers={{ name, age }}
    />
  )
}

export const ComponentFillers = () => {
  const lang = language('lang', 'props')

  const renderFiller1 = () => (
    <span style={{ color: 'red', fontWeight: 'bold', fontSize: 24 }}>
      <Localized label="text" lang={lang} />
    </span>
  )

  const renderFiller2 = () => (
    <img src="assets/smile.svg" alt="smile" style={{ width: 32 }} />
  )

  return (
    <Localized
      label="samples.components-fillers"
      lang={lang}
      fillers={{
        component: renderFiller1(),
        otherComponent: renderFiller2()
      }}
    />
  )
}
