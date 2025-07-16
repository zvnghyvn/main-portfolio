import styled from 'styled-components'
import { gap, radius, text, fontFamily, fontSize, media } from '@styles/mixins'

export const Certificates = styled.section`
  padding-top: 80px;

	.certificate-list {
		> li {
			flex-wrap: nowrap;
			align-items: center;
			${gap('lg')}
			margin-bottom: 24px;
			padding: 32px 40px;
			border: 1px solid rgba(200, 200, 200, 0.2);
			${radius('xl')}
		}

		> li:last-child {
			margin-bottom: 0;
		}

		span {
			${fontSize('base')}
		}

		.certificate-title {
			font-size: 20px;
		}

		.certificate-issuer {
			${fontFamily('pretendard')}
		}
		
		.certificate-date {
			margin-left: auto;
			${text('point')}
		}
	}

	// 반응형
  ${({ theme }) => media.mobile(`

	`)}

	${({ theme }) => media.mobile(`
			
	`)}
`;