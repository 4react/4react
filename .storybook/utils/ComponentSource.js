import React from 'react'
import { Source } from '@storybook/addon-docs/blocks'
import dedent from 'ts-dedent'

export const ComponentSource = ({ name, args }) => {
  const { children, ...otherArgs } = args
  let code, props

  props = Object.keys(otherArgs).reduce((acc, key) => {
    const arg = otherArgs[key]
    if (arg !== undefined) {
      switch (typeof arg) {
        case 'boolean':
          if (!!arg) acc += ` ${key}`
          break
        case 'string':
          if (arg !== '') acc += ` ${key}="${arg}"`
          break
        default:
          acc += ` ${key}={${arg}}`
      }
    }
    return acc
  }, '')

  if (children) {
    code = dedent`
      <${name}${props}>
        ${children}
      </${name}>
    `
  } else {
    code = `<${name}${props} />`
  }

  return (
    <Source
      language="jsx"
      code={code}
    />
  )
}
