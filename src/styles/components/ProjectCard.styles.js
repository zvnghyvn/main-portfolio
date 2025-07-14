

import styled from 'styled-components'
import { gap, radius, bg, text, fontFamily, fontSize, fontWeight, media } from '@styles/mixins'

export const Card = styled.div`
	flex-wrap: nowrap;
  justify-content: space-between;
  padding: 80px 0;
  border-bottom: 1px solid rgba(46, 46, 46, 0.20);

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
				transition: 0.2s ease-out;
			}

			.btn-detail {
				margin-bottom: 12px;
				border-color: #06A2E0;
				${text('point')}
			}
			.btn-detail:hover {
				background-color: rgba(6, 162, 224, 0.2);
			}

			.btn-demo {
				border-color: #A6A6A6;
				${text('grayDark')}
			}
			.btn-demo:hover {
				background-color: rgba(200, 200, 200, 0.2);
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
			position: relative;
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
				width: 250px;
				cursor:pointer;
			}

			a {
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

  ${media.mobile`
  `}
`;