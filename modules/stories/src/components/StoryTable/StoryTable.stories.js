import { boolean, number, object } from '@storybook/addon-knobs'
import React from 'react'
import { StoryBackground } from '../..'
import { StoryContent } from '../StoryContent/StoryContent'
import { StoryTable } from './StoryTable'

export default { title: 'stories/StoryTable' }

export const Basic = () => {
  const props = {
    fullscreen: boolean('fullscreen', false, 'props'),
    headings: object('headings', ['Name', 'Value', 'Description'], 'props'),
    widths: object('widths', [200, 200, 400], 'props')
  }

  const data = Array(number('rows (#)', 5, {}, 'content')).fill(0).map((row, i) => (
    Array(props.headings.length).fill(0).map((col, j) => (
      <StoryContent key={`${i}-${j}`} name={`${i} ${j}`} width="fill" height={32} />
    ))
  ))

  return (
    <StoryBackground>
      <StoryTable {...props} data={data} />
    </StoryBackground>
  )
}
