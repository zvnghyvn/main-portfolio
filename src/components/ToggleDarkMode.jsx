import styled from 'styled-components'

const ToggleButton = styled.button`
	position: relative;
	width: 56px;
	height: 32px;
	padding: 4px;
	background: rgba(255, 255, 255, 0.3);
	transition: 0.3s;
	border-radius: 8px;
	cursor: pointer;

	span {
		position: absolute;
		top: 4px;
		left: ${({ $isDark }) => ($isDark ? '24px' : '4px')};
		width: 24px;
		height: 24px;
		border-radius: 6px;
		background: ${({ $isDark }) => ($isDark ? '#000' : '#fff')};
		box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.25);
		transition: 0.3s;
	}
`;

export default function ToggleDarkMode({ isDark, toggleDarkMode }) {
  return (
    <ToggleButton $isDark={isDark} onClick={toggleDarkMode}>
      <b>{isDark ? '🌙' : '🌞'}</b>
    </ToggleButton>
  )
}