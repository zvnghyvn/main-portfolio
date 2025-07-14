import styled from 'styled-components';
import { bg, text, fontFamily, fontSize, fontWeight, gap, media } from '@styles/mixins';
import { radius } from '../mixins';

export const Skill = styled.section`
	margin-top: 96px;

	h2 { 
		margin-bottom: 16px;
		${fontSize('base')}
		${text('point')}
	}

	.skill-list {
		flex-wrap: wrap;
		justify-content: space-between;
  	align-items: center;
		gap: 40px;

		> li {
			width: 30%;
		}

		h3 {
			margin-bottom: 16px;
			${fontSize('sm')}
			${fontWeight('bold')}
		}

		.skill-tool {
			flex-wrap: wrap;
			align-items: center;
			${gap('sm')}

			> li {
				padding: 4px 10px;
				${radius('sm')}
				${bg('grayLight')}
				${fontSize('xs')}
				${text('black')}
			}
		}

		p {
			margin-top: 20px;
			${fontFamily('pretendard')}
			${fontSize('sm')}
			${text('grayDark')}
		}
	}

	// 반응형
  ${media.tablet`
		.skill-list {
			gap: 40px;

			> li {
				width: 45%;
			}
		}
  `}

  ${media.mobile`
    margin-top: 80px;

    .skill-list {
			flex-wrap: wrap;
			justify-content: start;
			gap: 26px;

			> li {
				width: 100%;
			}

			h3 {
				margin-bottom: 14px;
				${fontSize('xs')}
			}

			.skill-tool {
				> li {
					padding: 4px 8px;
					font-size: 11px;
				}
			}

			p {
				margin-top: 10px;
				font-size: 11px;
			}
		}
  `}
`;