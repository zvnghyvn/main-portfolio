import styled from 'styled-components'
import { gap, radius, bg, text, fontFamily, fontSize, fontWeight, media } from '@styles/mixins'

export const Card = styled.div`
	flex-wrap: nowrap;
  justify-content: space-between;
  padding: 80px 0;

	// 왼쪽 영역
	.project-info {
    width: 240px;
    margin-right: 100px;

    h3 {
			margin: 24px 0;
			font-size: 32px;
			${fontWeight('bold')}
    }

		> span {
			display: block;
		}

    .project-keyword {
			display: inline-block;
			padding: 8px 12px;
			${bg('grayLight')}
			${radius('base')}
			${fontSize('sm')}
			line-height: 1.2;
		}

    .project-type,
		.project-contribution {
			${fontFamily('pretendard')}
			${fontSize('base')}
			line-height: 1.6;
		}

    .project-contribution {
			${fontWeight('bold')}
		}

    .project-period {
			margin-top: 5px;
			${fontSize('sm')}
			${text('gray')}
		}

    .project-btns {
			margin-top: 64px;

			> a {
				display: block;
				padding: 16px 0;
				border: 2px solid;
				${radius('base')}
				${fontFamily('pretendard')}
				${fontSize('lg')}
				${fontWeight('bold')}
				text-align: center;
			}

			.btn-point {
				margin-bottom: 12px;
			}

			img {
				margin-left: 8px;
				vertical-align: -2px;
			}
		}
  }

	// 오른쪽 영역
  .project-details {
    width: calc(100% - 340px);
		word-break: keep-all;

    h4 {
			margin: 6px 0 24px;
			${fontSize('sm')}
			${fontWeight('regular')}
			${text('grayDark')}
		}

    .project-description {
			margin-bottom: 24px;
			${fontSize('lg')}
			line-height: 1.8;

			p:first-child::before {
				content: "📌";
				margin-right: 8px;
			}

			strong {
				${fontWeight('semibold')}
			}
		}

    .project-features {
			margin-bottom: 24px;
			padding: 16px 24px;
			${radius('base')}	
			${bg('grayLight')}
			${fontSize('md')}
			line-height: 1.8;

			> li::before {
				content: "•";
				margin-right: 8px;
			}
		}

    .project-media {
			align-items: start;
			margin-bottom: 24px;
			flex-wrap: wrap;
			${gap('md')}

			img {
				display: block;
				max-height: 118px;
				cursor:pointer;
			}

			> a {
				display: block;
			}
		}

    .project-tech,
		.project-tools {
			align-items: center;
			${gap('md')}
			${fontSize('sm')}
			${fontWeight('bold')}

			> span {
				padding: 8px 12px;
				${radius('base')}	
				${bg('grayLight')}
				${fontWeight('regular')}
				line-height: 1;
			}
		}

    .project-tech {
			margin-bottom: 12px;
		}
  }

	// 반응형
  ${media.tablet`
		.project-info {
			width: 200px;
			margin-right: 50px;
		}

		.project-details {
    	width: calc(100% - 250px);
		}
  `}

  ${({ theme }) => media.mobile(`
		flex-wrap: wrap;
		justify-content: space-between;
		padding: 60px 0;

		// 왼쪽 영역
		.project-info {
			width: 100%;
			margin: 0 0 40px;

			h3 {
				margin: 20px 0;
				font-size: 28px;
			}

			.project-keyword {
				font-size: ${theme.fontSize.xs};
			}

			.project-type,
			.project-contribution {
				font-size: ${theme.fontSize.sm};
			}

			.project-period {
				font-size: ${theme.fontSize.xs};
			}

			.project-btns {
				display: flex;
				flex-wrap: nowrap;
				margin-top: 15px;
				gap: 2%;

				> a {
					width: calc(50% - 1%);
					padding: 10px 0;
					font-size: ${theme.fontSize.sm};
				}

				.btn-point  {
					margin: 0;
				}

				img {
        	width: 6px;
					vertical-align: 0px;
				}
			}
		}

		// 오른쪽 영역
		.project-details {
			width: 100%;

			h4 {
				margin: 0 0 15px;
				font-size: ${theme.fontSize.md};
				font-weight: ${theme.fontWeight.medium};
			}

			.project-description {
				font-size: ${theme.fontSize.sm};
				line-height: 1.6;
			}

			.project-features {
				padding: 14px 20px;
				font-size: ${theme.fontSize.xs};
			}

			.project-media {
				flex-wrap: nowrap;
				justify-content: center;
				gap: ${theme.spacing.xs};

				> a {
					display: none;
				}
			}
			
			.project-tech,
			.project-tools {
				font-size: ${theme.fontSize.xs};

				> span {
					padding: 6px 10px;
					white-space: nowrap;
				}
			}
		}
  `)}
`;