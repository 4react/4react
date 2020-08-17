/* eslint-disable react/no-array-index-key */
import { classList, Size, styleList } from '@4react/syntax'
import React, { CSSProperties, FC } from 'react'
import styles from './StoryTable.sass'

export interface StoryTableProps {
  fullscreen?: boolean
  headings: string[]
  widths?: (Size)[]
  data: any[][]
  className?: string
  style?: CSSProperties
}

export const StoryTable: FC<StoryTableProps> = props => {
  const {
    fullscreen = false,
    headings = [],
    widths = [],
    data = [],
    className,
    style
  } = props

  const columns = Array(headings.length).fill(0).map((v, i) => i)

  const renderHeadings = () => columns.map(i => (
    <th className={styles.heading} key={`heading-${i}`}>
      {headings[i]}
    </th>
  ))

  const renderSpaces = () => columns.map(i => (
    <td className={styles.space} key={`space-${i}`} style={{ width: widths[i] || 0 }} />
  ))

  const renderData = () => (
    data.map((row, i) => (
      <tr key={`row-${i}`}>
        {columns.map(j => (
          <td className={styles.content} key={`cell-${i}-${j}`}>
            {data[i][j]}
          </td>
        ))}
      </tr>
    ))
  )

  return (
    <table
      className={classList(styles.content, className)}
      style={styleList(
        [{ width: '100%' }, fullscreen],
        style
      )}
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
    </table>
  )
}

export default StoryTable
