import styled from 'styled-components';
import { fontFamily, fontWeight, media } from '@styles/mixins'

export const About = styled.section`
  padding-top: 160px;
  text-align: center;

	h2 {
		margin-bottom: 58px;
		${fontFamily('pretendard')}
		font-size: 64px;
	}

	.about-intro {
		font-size: 32px;
	 	${fontWeight('bold')}
		line-height: 1.5;

		span {
			font-size: 28px;
			line-height: 1.2;
		}
	}

	// 반응형
  ${media.tablet`
    padding-top: 100px;
		
		h2 {
			margin-bottom: 40px;
			font-size: 50px;
		}

		.about-intro {
			font-size: 28px;

			span {
				font-size: 25px;
			}
		}
  `}

  ${media.mobile`
    padding-top: 80px;

    h2 {
			font-size: 40px;
		}

		.about-intro {
			font-size: 22px;

			span {
				font-size: 16px;
			}
		}
  `}
`