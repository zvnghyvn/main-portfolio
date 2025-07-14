import styled from 'styled-components'
import { radius } from '@styles/mixins';
import DarkIcon from '../assets/images/ico_mode_dark.svg'
import LightIcon from '../assets/images/ico_mode_light.svg'

const ToggleButton = styled.button`
	position: relative;
	width: 56px;
	height: 32px;
	padding: 4px;
	background: rgba(255, 255, 255, 0.3);
	transition: 0.3s;
	${radius('base')}
	cursor: pointer;

	img {
		position: absolute;
		top: 4px;
		left: ${({ $isDark }) => ($isDark ? '24px' : '4px')};
		padding: 4px;
		border-radius: 6px;
		background: ${({ $isDark }) => ($isDark ? '#000' : '#fff')};
		box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.25);
		transition: 0.3s;
	}
`;

export default function ToggleDarkMode({ isDark, toggleDarkMode }) {
  return (
    <ToggleButton $isDark={isDark} onClick={toggleDarkMode}>
      {isDark ? <img src={DarkIcon} alt="dark mode" /> : <img src={LightIcon} alt="light mode" />}
    </ToggleButton>
  )
}