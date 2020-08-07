import React, { CSSProperties, FC } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  text-align: center;
  margin: 20px auto;
`

const Title = styled.span`
  font-weight: bold;
  font-size: 25px;
`

export interface StorySectionProps {
  title: string
  className?: string
  style?: CSSProperties
}

export const StorySection: FC<StorySectionProps> = props => {
  const { title, className, style, children } = props
  return (
    <Container className={className} style={style}>
      <Title>{title}</Title>
      {children}
    </Container>
  )
}

export default StorySection
