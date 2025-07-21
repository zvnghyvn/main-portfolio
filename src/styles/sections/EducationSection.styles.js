import styled from 'styled-components'
import { radius, bg, text, fontSize, fontWeight, media } from '@styles/mixins'

export const Education = styled.section`
  padding-top: 80px;

	.education-list {
		> li {
			flex-wrap: nowrap;
      align-items: center;
		  justify-content: space-between;
			margin-bottom: 24px;
			padding: 24px;
			border: 1px solid rgba(200, 200, 200, 0.2);
			${radius('xl')}
		}
		
		> li:last-child {
			margin-bottom: 0;
		}

		// 왼쪽 영역
		.education-info {
			width: 344px;
			padding: 16px;

			h4 {
				margin-bottom: 24px;
				${fontSize('xl')}
				${fontWeight('bold')}

				span {
					display: block;
					line-height: 1.2;
				}
			}

			.education-period {
				${fontSize('base')}
				${text('point')}
			}
		}

		// 오른쪽 영역
		.education-features {
			width: calc(100% - 344px);
			padding: 24px 32px;
			${radius('xl')}
			${bg('grayLight')}
			${fontSize('md')}
			line-height: 1.6;

			> li::before {
				content: "•";
				margin-right: 8px;
			}
		}
	}

  // 반응형
  ${({ theme }) => media.tablet(`
		.education-list {
			// 왼쪽 영역
			.education-info {
				width: 240px;

			h4 {
				font-size: ${theme.fontSize.lg}
			}

			.education-period {
				font-size: ${theme.fontSize.sm}
			}
		}

		// 오른쪽 영역
		.education-features {
			width: calc(100% - 240px);
			${fontSize('sm')}
		}
	`)}

	${({ theme }) => media.mobile(`
		.education-list {
			> li {
				flex-wrap: wrap;
				margin-bottom: 20px;
				padding: 16px;
			}

			// 왼쪽 영역
			.education-info {
				position: relative;
				width: 100%;
        padding: 5px 0 15px;

				h4 {
					margin-bottom: 0;
					font-size: ${theme.fontSize.base}
				}

				.education-period {
					position: absolute;
					top: 5px;
					right: 17px;
					font-size: ${theme.fontSize.xs}
				}
			}

			// 오른쪽 영역
			.education-features {
				width: 100%;
				padding: 14px 20px;
				font-size: ${theme.fontSize.xs}

				> li:nth-child(3),
				> li:nth-child(4) {
					display: none;
				}
			}
		}
	`)}
`;