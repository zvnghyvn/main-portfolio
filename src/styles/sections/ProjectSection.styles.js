import styled from 'styled-components';
import { media } from '@styles/mixins'

export const Project = styled.section`
  padding-top: 160px;

  .project-card {
    border-bottom: 1px solid rgba(200, 200, 200, 0.2);
  }
  
  .project-card:last-child {
    border: none;
    padding-bottom: 0;
  }

  // 반응형
  ${media.mobile`
		padding-top: 120px;
  `}

`;