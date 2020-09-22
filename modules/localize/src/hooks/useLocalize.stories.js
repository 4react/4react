/* eslint-disable react/jsx-key */
import { StoryBackground, StoryTable } from '@4react/stories'
import { select } from '@storybook/addon-knobs'
import React from 'react'
import withLocalizeContext from '../../withLocalizeContext'
import { Localized } from '../components/Localized/Localized'

export default {
  title: 'localize/useLocalize',
  decorators: [withLocalizeContext]
}

const stringifyParams = params => JSON.stringify(
  Object
    .keys(params)
    .reduce((res, key) => {
      res[key] = (typeof params[key] === 'object')
        ? '<Component />'
        : params[key]
      return res
    }, {})
).replace('"<Component />"', '<Component />')

const LocalizationsStory = ({ configs }) => {
  const language = select('language', ['en', 'it'], 'en')
  const data = configs.map(row => [
    row[0],
    stringifyParams(row[1]),
    <Localized label={row[0]} {...row[1]} language={language} />
  ])

  return (
    <StoryBackground>
      <StoryTable
        headings={['label', 'params', 'localization']}
        data={data}
      />
    </StoryBackground>
  )
}

export const Namespaces = () => (
  <LocalizationsStory
    configs={[
      ['basic', {}],
      ['common:basic', {}],
      ['special:basic', {}],
      ['basic', { namespace: 'common' }],
      ['basic', { namespace: 'special' }],
      ['common:basic', { namespace: 'special' }],
      ['special:basic', { namespace: 'common' }]
    ]}
  />
)

export const Transform = () => (
  <LocalizationsStory
    configs={[
      ['welcomeToTheSite', { transform: 'lowercase' }],
      ['welcomeToTheSite', { transform: 'uppercase' }],
      ['welcomeToTheSite', { transform: 'capitalize' }]
    ]}
  />
)

export const Nesting = () => (
  <LocalizationsStory
    configs={[
      ['nested.title', {}],
      ['nested.form.fieldUsername', {}]
    ]}
  />
)

export const Fillers = () => (
  <LocalizationsStory
    configs={[
      ['presentation', {}],
      ['presentation', { name: 'Matteo' }],
      ['presentation', { name: 'Matteo', age: 30 }],
      ['presentation', { name: <span style={{ color: 'red' }}>Matteo</span>, age: 30 }],
      ['presentation', { name: <span style={{ color: 'red' }}>Matteo</span>, age: <b>30</b> }]
    ]}
  />
)

export const Context = () => (
  <LocalizationsStory
    configs={[
      ['vehicles', {}],
      ['vehicles_classic', {}],
      ['vehicles_special', {}],
      ['vehicles', { context: 'classic' }],
      ['vehicles', { context: 'special' }],
      ['vehicles_classic', { context: 'special' }]
    ]}
  />
)

export const NamedContext = () => (
  <LocalizationsStory
    configs={[
      ['vehicles', {}],
      ['vehicles', { type: 'light' }],
      ['vehicles', { type: 'heavy' }],
      ['vehicles', { type: 'heavy', color: 'red' }],
      ['vehicles', { type: 'heavy', color: 'green' }],
      ['vehicles', { type: 'heavy', color: 'blue' }],
      ['vehicles', { color: 'green' }]
    ]}
  />
)

export const CountContext = () => (
  <LocalizationsStory
    configs={[
      ['books', {}],
      ['books', { count: 0 }],
      ['books', { count: 1 }],
      ['books', { count: 2 }],
      ['books', { count: 10 }],
      ['th', { count: 0 }],
      ['th', { count: 1 }],
      ['th', { count: 2 }],
      ['th', { count: 10 }]
    ]}
  />
)

export const MixedContext = () => (
  <LocalizationsStory
    configs={[
      ['numberOfHouse_color', { color: 'red', count: 0 }],
      ['numberOfHouse_color', { color: 'red', count: 1 }],
      ['numberOfHouse_color', { color: 'red', count: 2 }],
      ['numberOfHouse_color', { color: 'red', count: 10 }],
      ['numberOfHouse_color', { color: 'green', count: 0 }],
      ['numberOfHouse_color', { color: 'green', count: 1 }],
      ['numberOfHouse_color', { color: 'green', count: 2 }],
      ['numberOfHouse_color', { color: 'green', count: 10 }]
    ]}
  />
)

export const Recursive = () => (
  <LocalizationsStory
    configs={[
      ['theNthPosition', { count: 0 }],
      ['theNthPosition', { count: 1 }],
      ['theNthPosition', { count: 2 }],
      ['theNthPosition', { count: 10 }]
    ]}
  />
)
