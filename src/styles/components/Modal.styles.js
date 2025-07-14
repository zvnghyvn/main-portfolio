import styled from 'styled-components'
import { gap, radius, bg, text, fontFamily, fontSize, fontWeight, media } from '@styles/mixins';

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
`

export const Content = styled.div`
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);

  img {
    display: block;
    max-width: 100%;
    height: auto;
		${radius('base')}
  }
`

export const CloseButton = styled.button`
  z-index: 101;
  position: absolute;
  top: -30px;
  right: -30px;
	${bg('black')}
	${fontSize('xl')}
	${text('white')}
`
