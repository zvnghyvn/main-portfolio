import styled from 'styled-components'
import { gap, radius, bg, text, fontFamily, fontSize, fontWeight, media } from '@styles/mixins'

export const Process = styled.main`
  .process-card {
    padding: 80px 0 120px;

    h2 {
      font-size: 40px;
			text-align: center;
    }

		h3 {
			margin-bottom: 55px;
			${fontSize('xl')}
		}

		section {
			padding-top: 160px;
		}
  }
`;

export const ProcessBtns = styled.div`
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
	${gap('base')}
	margin: 60px auto 0;

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

	${({ theme }) => media.mobile(`
		> a {
			padding: 10px 20px;
			font-size: ${theme.fontSize.sm};

			img {
				width: 6px;
				vertical-align: 0px;
			}
		}
	`)}
`;

export const ProcessThumb = styled.div`
	margin-top: 50px;
	text-align: center;

	img {
		max-width: 80%;
	}
`;

export const ProcessOverview = styled.section`
	ul {
		width: 100%;
		padding: 24px 32px;
		${radius('xl')}
		${bg('grayLight')}
		${fontSize('base')}
		line-height: 1.8;

		> li::before {
			content: "•";
			margin-right: 8px;
		}
	}

	${({ theme }) => media.mobile(`
		ul {
			padding: 14px 20px;
			font-size: ${theme.fontSize.sm};
		}
	`)}
`;

export const ProcessIntro = styled.section`
	li {
		margin-bottom: 35px;

		h4 {
			margin-bottom: 14px;
			${fontSize('sm')}
			${fontWeight('regular')}
			${text('grayDark')}
		}

		p {
			${fontSize('lg')}
			line-height: 1.8;
		}

		p::before {
			content: "📌";
			margin-right: 8px;
		}

		a {
			${fontFamily('pretendard')}
			${text('point')}
			${fontSize('md')}
			transition: 0.2s;

			img {
				vertical-align: -2px;
				margin-left: 5px;
			}
		}

		a:hover {
			margin-left: 10px;
		}
	}

	li:last-child {
		margin: 0;
	}

	${({ theme }) => media.mobile(`
		li {
			h4 {
				font-size: ${theme.fontSize.sm};
				font-weight: ${theme.fontWeight.medium};
			}

			p {
				font-size: ${theme.fontSize.md};
			}

			a {
				font-size: ${theme.fontSize.sm};
			}
		}
	`)}
`;

export const ProcessTech = styled.section`
	table {
		width: 100%;
		border-collapse: collapse;
		text-align: center;
	}

	th, td {
		padding: 10px 14px;
		border: 1px solid transparent;
	}

	th {
		${fontSize('sm')}
		${fontWeight('regular')}
		${text('grayDark')}
		border-bottom-color: rgba(200, 200, 200, 0.5);
	}

	td:not(:last-child), th:not(:last-child) {
		border-right: 1px solid rgba(200, 200, 200, 0.5);
	}

	tr:not(:last-child) td, tr:not(:last-child) th {
		border-bottom: 1px solid rgba(200, 200, 200, 0.2);
	}
	
	tbody td:nth-child(1) {
		${fontSize('sm')}
		${text('grayDark')}
	}

	tbody td:nth-child(2) {
		${fontSize('base')}
		${fontWeight('medium')}
	}

	tbody td:nth-child(3) {
		${fontFamily('pretendard')}
		${fontSize('base')}
		${fontWeight('regular')}
		text-align: left;
	}

	${({ theme }) => media.mobile(`
		tbody td:nth-child(2) {
			font-size: ${theme.fontSize.md};
			color: #555;
		}

		tbody td:nth-child(3) {
			font-size: ${theme.fontSize.md};
			color: #555;
		}
	`)}
`;

export const ProcessContribut = styled.section`
	h4 {
		margin-bottom: 24px;
	}

	.contribut-role {
		margin-bottom: 40px;
	
		ul {
			width: 100%;
			padding: 24px 32px;
			${radius('xl')}
			${bg('grayLight')}
			${fontSize('base')}
			line-height: 1.6;

			> li::before {
				content: "•";
				margin-right: 8px;
			}
		}
	}
	
	.contribut-function {
		ul {
			flex-wrap: wrap;
			align-items: flex-start;
  		justify-content: space-between;
			${gap('xl')}

			li {
				width: calc((100% - 32px) / 2);
				${fontSize('md')}

				> span {
					padding: 8px 14px;
					${radius('base')}	
					${bg('grayLight')}
					line-height: 1;
				}

				> p {
					margin-top: 18px; 
					${fontFamily('pretendard')}
				}

				> p::before {
					content: "•";
					margin: 0 6px;
				}
			}

			li:last-child {
				margin: 0;
			}
		}
	}

	
	${({ theme }) => media.mobile(`
		.contribut-role {
			ul {
				padding: 14px 20px;
				font-size: ${theme.fontSize.md};
			}
		}

		.contribut-function {
			li {
				font-size: ${theme.fontSize.xs};

				> span {
					padding: 6px 10px;
				}

				> p {
					color: #555;
				}
			}
		}
	`)}
`;

export const ProcessTrouble = styled.section`
	.trouble-item {
		flex-wrap: nowrap;
		align-items: flex-start;
		justify-content: space-between;
		margin-bottom: 24px;
		padding: 36px 30px;
		border: 1px solid rgba(200, 200, 200, 0.2);
		${radius('xl')}

		> trouble-item:last-child {
			margin-bottom: 0;
		}

		h4 {
			width: 344px;
			${fontSize('xl')}
			${fontWeight('bold')}

			span {
				display: block;
				line-height: 1.2;
			}
		}

		ul {
			width: calc(100% - 344px);

			li {
				margin-bottom: 18px;

				h5 {
					margin-bottom: 5px;
					${fontSize('sm')}
					${fontWeight('regular')}
					${text('point')}
				}

				p {
					${fontFamily('pretendard')}
					${fontSize('base')}
				}

				pre {
					${radius('xl')}
					${bg('grayLight')}
					${fontSize('md')}
					overflow-x: auto;
					
					code {
						${fontFamily('ibm')}
						${fontSize('sm')}
						line-height: 1.2;
					}
				}
			}

			li:last-child {
				margin: 0;

				p {
					${fontWeight('semibold')}
				}
			}
		}
	}

	${({ theme }) => media.tablet(`
		.trouble-item {
			padding: 24px;

			h4 {
				width: 290px;
				font-size: ${theme.fontSize.lg};
			}

			ul {
				width: calc(100% - 290px);
			}
		}
	`)}

	${({ theme }) => media.mobile(`
		.trouble-item {
			flex-wrap: wrap;
			padding: 22px;
			gap: 30px;

			h4 {
				width: 100%;
			}

			ul {
				width: 100%;

				li {
					margin-bottom: 24px;

					p {
						font-size: ${theme.fontSize.md};
					}

					pre {
						font-size: ${theme.fontSize.xs};
					}
				}
			}
		}
	`)}
`;

export const ProcessFlow = styled.section`
	.flow-thumb {
		margin-bottom: 14px;
		text-align: center;
	
		img {
			max-width: 80%;
		}
	}

	p {
		${fontSize('sm')}
		${text('grayDark')}
		text-align: center;
	}
`;

export const ProcessReview = styled.section`
	h3 {
		${text('point')}
	}

	li {
		margin-bottom: 40px;

		h4 {
			margin-bottom: 5px;
			${fontSize('sm')}
			${fontWeight('regular')}
			${text('grayDark')}
		}

		h4::before {
			content: "•";
			margin-right: 8px;
		}

		p {
			${fontSize('base')}
			line-height: 1.6;
		}
	}

	li:last-child {
		margin: 0;
	}

	${({ theme }) => media.mobile(`
		li {
			h4 {
				font-size: ${theme.fontSize.sm};
			}

			p {
				font-size: ${theme.fontSize.md};
			}
		}
	`)}
`;