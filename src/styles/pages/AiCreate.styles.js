import styled from 'styled-components'
import { radius, text, fontSize, fontWeight, media } from '@styles/mixins'

export const AiCreateWrap = styled.main`
  padding: 80px 0 120px;

  h2 {
    font-size: 40px;
    text-align: center;

    .title-sub {
      display: block;
      margin-top: 8px;
      ${fontSize('sm')}
      ${text('grayDark')}
      ${fontWeight('medium')}
    }
  }

  ${({ theme }) => media.mobile(`
    padding: 60px 0 80px;

    h2 {
      font-size: 28px;

      .title-sub {
        font-size: ${theme.fontSize.xs};
      }
    }
  `)}
`;

export const AiMasonry = styled.ul`
  margin-top: 48px;
  column-count: 4;
  column-gap: 20px;

  ${({ theme }) => media.tablet(`
    column-count: 3;
    column-gap: 16px;
  `)}

  ${({ theme }) => media.mobile(`
    margin-top: 32px;
    column-count: 2;
    column-gap: 12px;
  `)}
`;

export const AiCard = styled.li`
  break-inside: avoid;
  -webkit-column-break-inside: avoid;
  page-break-inside: avoid;
  display: inline-block;
  width: 100%;
  margin-bottom: 20px;

  .thumb {
    position: relative;
    width: 100%;
    overflow: hidden;
  }

  img,
  video {
    width: 100%;
    height: auto;
    display: block;
    border-radius: inherit;
    transition: transform 0.3s ease;
  }

  .overlay {
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.55);
    color: ${({ theme }) => theme.colors.white};
    padding: 16px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    opacity: 0;
    transition: opacity 0.25s ease;
  }

  .tools {
    ${fontSize('xs')}
    ${text('grayLight')}
  }

  .topic {
    margin-top: 4px;
    ${fontSize('md')}
    ${fontWeight('semibold')}
  }

  &:hover img,
  &:hover video {
    transform: scale(1.04);
  }

  &:hover .overlay {
    opacity: 1;
  }

  ${({ theme }) => media.mobile(`
    margin-bottom: 14px;

    .overlay {
      padding: 12px;
    }

    .topic {
      font-size: ${theme.fontSize.sm};
    }
  `)}
`;