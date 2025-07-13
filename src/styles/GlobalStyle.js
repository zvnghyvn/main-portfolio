import { createGlobalStyle } from 'styled-components'
import { bg, text } from '@styles/mixins';

export const GlobalStyle = createGlobalStyle`
  body {
    ${bg('white')}
    ${text('black')}
    transition: background-color 0.3s, color 0.3s;
  }

  html.dark body {
    ${bg('black')}
    ${text('white')}
  }
`