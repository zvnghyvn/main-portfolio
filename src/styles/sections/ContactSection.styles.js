import styled from 'styled-components'
import { fontFamily, fontSize, fontWeight, media } from '@styles/mixins'

export const Contact = styled.section`
  padding: 200px 0;
	text-align: center;
	${fontFamily('pretendard')}

	h2 {
		margin-bottom: 56px;
		font-size: 48px;
	}

	.contact-info {
		font-size: 28px;
		${fontWeight('bold')}
		line-height: 2;

		span, a {
			${fontFamily('ibm')}
			${fontSize('xl')}
			line-height: 1.2;
		}
	}

	// 반응형
 ${media.tablet`
		h2 {
			margin-bottom: 40px;
			font-size: 38px;
		}

		.contact-info {
			font-size: 24px;

			span, a {
				font-size: 20px;
			}
		}
  `}

	${media.mobile`
    padding-top: 130px 0;

		h2 {
			font-size: 32px;
		}

		.contact-info {
			font-size: 18px;

			span, a {
				font-size: 14px;
			}
		}
	`}
`;