import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body, html, #root {
    height: 100%;
    width: 100%;
  }

  body {
    background: rgb(40, 44, 52);
    font-family: sans-serif;
  }

  *, *::before, *::after {
    box-sizing: border-box;
    margin: unset;
  }
`
