import styled from 'styled-components';
import { gap, bg, text, fontSize, fontWeight, media } from '@styles/mixins';

export const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 99;
`;

export const HeaderMain = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 18px 40px;
  ${bg('point')}
  ${text('white')}

  .header-intro {
    ${fontSize('base')}
    ${fontWeight('semibold')}
  }

  .header-contact {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    ${gap('xl')}
    ${fontSize('md')}
  }

  .header-contact > a,
  .header-contact > span {
    position: relative;
    ${fontWeight('semibold')}

    &::after {
      content: '';
      position: absolute;
      top: 50%;
      right: -16px;
      transform: translateY(-50%);
      width: 1px;
      height: 12px;
      background-color: rgba(255, 255, 255, 0.2);
    }
  }

  .header-contact .mode-toggle {
    flex-wrap: nowrap;
    align-items: center;
    ${gap('base')}

    > span {
      ${fontSize('xs')}
      ${fontWeight('regular')}
    }
  }

  // 반응형
  ${({ theme }) => media.tablet(`
    flex-wrap: wrap;
    padding: 16px 20px;

    .header-intro {
      font-size: ${theme.fontSize.sm};
    }

    .header-contact {
      font-size: ${theme.fontSize.xs};
    }
  `)}

  ${media.mobile`
    flex-wrap: nowrap;
    padding: 16px 2%;

    .header-contact > a,
    .header-contact span {
      display: none;
    }
  `}
`;

export const HeaderNav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  ${gap('lg')}
  padding: 24px 0;
  ${bg('white')}

  html.dark & {
  ${bg('black')}
  }

  button {
    ${fontSize('lg')}
    ${text('gray')}
  }

  // 반응형
  ${({ theme }) => media.tablet(`
    gap: 20px;
    padding: 20px 2%;

    button {
      font-size: ${theme.fontSize.md};
    }
    
    img {
      width: 22px;
    }
  `)}

  ${({ theme }) => media.mobile(`
    gap: 15px;

    button {
      font-size: ${theme.fontSize.sm};
    }

    img {
      width: 20px;
    }
  `)}
`;