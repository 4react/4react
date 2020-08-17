import React from 'react'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    font-size: 16px;
  }

  #root {
    *, *::after, *::before {
      box-sizing: border-box;
    }
  }
`

export const withGlobalStyle = () => (Story: any) => (
  <>
    <GlobalStyle />
    <Story />
  </>
)
