import styled from 'styled-components'
import { gap, radius, bg, text, fontFamily, fontSize, fontWeight, media } from '@styles/mixins'

export const Process = styled.main`
  .process-card {
    padding-top: 100px;

    h2 {
      font-size: 32px;
			text-align: center;
    }

		h3 {
			margin-bottom: 50px;
			${fontSize('lg')}
		}

		section {
			margin-top: 120px;
		}
  }
`;

export const ProcessBtns = styled.div`
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
	${gap('base')}
	margin: 40px auto 0;

	> a {
		display: block;
    padding: 12px 24px;
    border: 2px solid;
		${radius('base')}
		${fontFamily('pretendard')}
		${fontSize('base')}
		${fontWeight('semibold')}
		line-height: 1;
    text-align: center;

		img {
			width: 7px;
			margin-left: 4px;
			vertical-align: -1px;
		}
	}
`;

export const ProcessThumb = styled.div`
	margin-top: 50px;
	img {
		display: block;
		max-width: 80%;
		margin: 0 auto;
	}
`;

export const ProcessOverview = styled.section`
	ul {
			width: 100%;
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
`;

export const ProcessIntro = styled.section`
`;

export const ProcessTech = styled.section`
`;

export const ProcessContribut = styled.section`
`;

export const ProcessTrouble = styled.section`
`;

export const ProcessFlow = styled.section`
`;

export const ProcessReview = styled.section`
`;