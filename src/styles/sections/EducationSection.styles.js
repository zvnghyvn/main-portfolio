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
  ${({ theme }) => media.mobile(`

	`)}

	${({ theme }) => media.mobile(`
			
	`)}
`;