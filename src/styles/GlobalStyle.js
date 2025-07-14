import { createGlobalStyle } from 'styled-components'
import { bg, text, media } from '@styles/mixins';

export const GlobalStyle = createGlobalStyle`
  body {
    padding-top: 68px;
    ${bg('white')}
    ${text('black')}
    transition: background-color 0.3s, color 0.3s;
  }

  html.dark body {
    ${bg('black')}
    ${text('white')}
  }

  main {
    padding-top: 85px;
  }

  .wd-inner {
    width: 1312px;
    margin: 0 auto;
  }

  // 반응형
  ${media.tablet`
    body {
      padding-top: 64px;
		  word-break: keep-all;
    }

    main {
      padding-top: 66px;
    }

    .wd-inner {
      width: 92%;
      margin: 0 auto;
    }
  `}
`