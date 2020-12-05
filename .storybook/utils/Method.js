import React from 'react'
import { Source } from '@storybook/addon-docs/blocks'

export const Method = ({ name, impl, params = [] }) => {
  const code = `${name}(${params.join(', ')})`
  let res
  try {
    res = eval(`f => f(${params.join(', ')})`)(impl)
  } catch (e) {
    res = 'ERROR'
  }

  const renderRes = () => {
    if (typeof res === 'string') return `"${res}"`
    return res
  }

  return (
    <Source
      language="js"
      code={`${code} // ${renderRes()}`}
    />
  )
}
