import styled from 'styled-components'
import { gap, radius, bg, text, fontFamily, fontSize, fontWeight, media } from '@styles/mixins'

export const Experience = styled.section`
  padding-top: 160px;

	h2 {
		margin-bottom: 56px;
	}

  .experiences-list {
    flex-wrap: wrap;
		gap: 24px;

    > li {
      width: 100%;
      padding: 24px;
      border: 1px solid #06A2E0;
      ${radius('xl')}
    }

    // 상단 영역
    .experience-info {
      flex-wrap: nowrap;
      align-items: center;
		  justify-content: space-between;
      margin-bottom: 16px;
      padding: 16px;

      h3 {
        ${fontSize('xl')}
        ${fontWeight('bold')}
      }

      .flex-left {
        align-items: center;
        ${gap('lg')}

        > span {
          ${fontFamily('pretendard')}
          ${fontSize('base')}
        }

        .experience-company {
          ${text('grayDark')}
        }
      }

      .flex-right {
        align-items: center;
        ${gap('lg')}

        > span {
          ${text('point')}
        }

        .experience-period {
          ${fontSize('base')}
        }

        .experience-total-period {
          padding: 6px 12px;
          ${radius('base')}
          ${bg('pointLight')}
          ${fontSize('sm')}
          ${fontWeight('semibold')}
        }
      }
    }

    // 하단 영역
    .experience-features {
      padding: 24px 32px;
			${radius('xl')}
      ${bg('grayLight')}
      ${fontSize('md')}
			line-height: 1.8;

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
			padding-top: 120px;
	`)}
`;