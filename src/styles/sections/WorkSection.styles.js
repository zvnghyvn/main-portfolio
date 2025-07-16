import styled from 'styled-components';
import { bg, text, fontFamily, fontSize, fontWeight, media } from '@styles/mixins'

export const Work = styled.section`
  padding-top: 160px;

	h2 {
		margin-bottom: 80px;
	}

	.work-list {
		flex-wrap: wrap;
		gap: 70px 24px;

		li {
			width: calc((100% - 48px) / 3);
		}

	.work-title {
		align-items: center;
		justify-content: space-between;		
		margin-bottom: 16px; 

			h3 {
				font-size: 28px;
			}

			a {
				${fontFamily('pretendard')}
				${fontSize('sm')}
				${text('point')}

				img {
					vertical-align: -3px;
    			margin-left: 5px;
				}
			}
		}

		.work-image {
			margin-bottom: 6px;

			a {
				display: block;
			}
				
			img {
				max-width: 100%;
			}
		}

		.work-info {
			align-items: center;
			justify-content: space-between;
			margin-bottom: 24px;
			padding: 12px 20px;
			${bg('pointLight')}

			> span {
				${fontSize('xs')}
			}

			span.info-client {
				${fontWeight('medium')}
				${text('point')}
			}

			span.info-contribution {
				${text('grayDark')}
			}
		}

		.work-description {
			${fontFamily('pretendard')}	
			${fontSize('base')}

			p:first-child::before {
				content: "📌";
				margin-right: 8px;
			}
		}
	}


  // 반응형
  ${({ theme }) => media.mobile(`

	`)}

	${({ theme }) => media.mobile(`
			padding-top: 120px;
	`)}
	${media.mobile`
		padding-top: 120px;
  `}

`;