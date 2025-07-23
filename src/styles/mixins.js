// 컬러
export const bg = (color) => (props) => `
  background-color: ${props.theme.colors[color]};
`;

export const text = (color) => (props) => `
  color: ${props.theme.colors[color]};
`;

// 폰트
export const fontSize = (size) => (props) => `
  font-size: ${props.theme.fontSize[size]};
`;

export const fontWeight = (weight) => (props) => `
  font-weight: ${props.theme.fontWeight[weight]};
`;

export const fontFamily = (name) => (props) => `
  font-family: ${props.theme.fontFamily[name]};
`;

// 간격
export const gap = (size) => (props) => `
  gap: ${props.theme.spacing[size]};
`

// radius
export const radius = (size) => (props) => `
  border-radius: ${props.theme.radius[size]};
`

// 반응형
export const media = {
  tablet: (style) => (props) => `
    @media (max-width: ${props.theme.breakpoints.tablet}) {
      ${style}
    }
  `,
  mobile: (style) => (props) => `
    @media (max-width: ${props.theme.breakpoints.mobile}) {
      ${style}
    }
  `,
};