import styled from 'styled-components'
import { gap, radius, text, fontFamily, fontSize, fontWeight, media } from '@styles/mixins'

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

			b {
				${fontWeight('regular')}
			}
		}
	}

	// 반응형
  ${({ theme }) => media.tablet(`
			.certificate-list {
				> li {
					margin-bottom: 24px;
					padding: 24px;
				}

				span {
					font-size: ${theme.fontSize.sm}
				}

				.certificate-title {
					font-size: 18px;
				}

				.certificate-issuer {
					color: ${theme.colors.grayDark}
				}
			}
	`)}

	${({ theme }) => media.mobile(`
		.certificate-list {
			> li {
				gap: ${theme.spacing.base}
				margin-bottom: 20px;
				padding: 16px;
			}

			span {
				font-size: ${theme.fontSize.xs}
			}

			.certificate-title {
				font-size: 16px;
			}

			.certificate-issuer {
				display: none;
			}

			.certificate-date {
				b {
					display: none;
				}
			}
		}
	`)}
`;