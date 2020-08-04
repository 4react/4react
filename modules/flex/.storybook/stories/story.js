import React from 'react'
import styled from 'styled-components'
import Flex from '../../src/components/Flex'

const FlexContainer = styled(Flex)`
  background-color: #8D56B2;
  border: 2px solid black;
  border-radius: 12px;
  width: 600px;
  height: 400px;
`

const FlexInnerContainer = styled(Flex)`
  background-color: #566db2;
  border: 2px solid black;
  border-radius: 12px;
  min-width: 16px;
  min-height: 16px;
  margin: 12px;
`

const FlexItem = styled(Flex)`
  background-color: #DD9A3B;
  border: 2px solid black;
  border-radius: 12px;
  min-width: 32px;
  min-height: 32px;
  padding: 24px;
  margin: 12px;
`

const Story = () => (
  <FlexContainer row justify="space-between" align="center">
    <FlexItem alignSelf="start">1</FlexItem>
    <FlexItem shrink grow>2</FlexItem>
    <FlexInnerContainer
      alignSelf="stretch"
      grow={2}
      column justify="space-between"
      align="center"
    >
      <FlexItem alignSelf="stretch">3.1</FlexItem>
      <FlexItem>3.2</FlexItem>
      <FlexItem alignSelf="end" grow>3.3</FlexItem>
    </FlexInnerContainer>
  </FlexContainer>
)

export default Story
