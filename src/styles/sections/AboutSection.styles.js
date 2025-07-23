import styled from 'styled-components';
import { fontFamily, fontWeight, media } from '@styles/mixins'

export const About = styled.section`
  padding-top: 160px;
  text-align: center;
	${fontFamily('pretendard')}

	h2 {
		margin-bottom: 58px;
		font-size: 64px;
	}

	.about-info {
		font-size: 32px;
	 	${fontWeight('bold')}
		line-height: 2;

		span {
			${fontFamily('ibm')}
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

		.about-info {
			font-size: 28px;

			span {
				font-size: 25px;
			}
		}
  `}

  ${media.mobile`
    padding-top: 80px;

    h2 {
			font-size: 36px;
		}

		.about-info {
			font-size: 22px;

			span {
				font-size: 16px;
			}
		}
  `}
`