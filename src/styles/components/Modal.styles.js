import styled from 'styled-components'
import { gap, media } from '@styles/mixins';

export const Backdrop = styled.div`
  z-index: 100;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  cursor:pointer;
`

export const Content = styled.div`
  align-items: flex-start;
  ${gap('base')}

  > div {
    overflow-x: hidden;
    overflow-y: auto;
    max-width: 50vw;
    max-height: 60vh;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
    cursor: auto;

    img {
      display: block;
      max-width: 100%;
    }
  }

  > button {
    transform: translateY(-20px);

    img {
      width: 32px;
    }
  }
  
  ${media.mobile`
    gap: 0;

    > div {
      max-width: 85vw;
    }

    > button {
      transform: translateY(-28px);

      img {
        width: 28px;
      }
    }
  `}
`
