/* eslint-disable react/no-array-index-key */
import React, { CSSProperties, FC } from 'react'
import styled, { css } from 'styled-components'
import adaptSize from '../utils/adaptSize'

const Container = styled.table<{ fullscreen?: boolean }>`
  border: 1px solid lightgray;
  border-collapse: collapse;
  margin: 20px auto;
  background-color: white;
  ${p => p.fullscreen && css`
    width: 100%;
  `};
`

const Heading = styled.th`
  font-size: 14px;
  padding: 10px 20px;
  background-color: lightgray;
  text-align: left;
`

const Space = styled.td`
  height: 0;
  width: ${p => adaptSize(p.width)};
`

const Content = styled.td`
  padding: 10px 20px;
`

export interface StoryTableProps {
  fullscreen?: boolean
  headings: string[]
  widths?: (string | number)[]
  data: any[][]
  className?: string
  style?: CSSProperties
}

export const StoryTable: FC<StoryTableProps> = props => {
  const { fullscreen, headings, widths, data, className, style } = props

  const columns = Array(headings.length).fill(0).map((v, i) => i)

  const renderHeadings = () => columns.map(i => (
    <Heading key={`heading-${i}`}>{headings[i]}</Heading>
  ))

  const renderSpaces = () => columns.map(i => (
    <Space key={`space-${i}`} width={widths ? widths[i] : 0} />
  ))

  const renderData = () => (
    data.map((row, i) => (
      <tr key={`row-${i}`}>
        {columns.map(j => (
          <Content key={`cell-${i}-${j}`}>{data[i][j]}</Content>
        ))}
      </tr>
    ))
  )

  return (
    <Container
      fullscreen={fullscreen}
      className={className}
      style={style}
    >
      {headings && (
        <tr>
          {renderHeadings()}
        </tr>
      )}
      <tr>
        {renderSpaces()}
      </tr>
      {renderData()}
    </Container>
  )
}

StoryTable.defaultProps = {
  fullscreen: false
}

export default StoryTable
