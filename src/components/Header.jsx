import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { HeaderWrapper, HeaderMain, HeaderNav } from '@styles/Header.styles';
import ToggleDarkMode from '@components/ToggleDarkMode'
import AboutDarkIcon from '../assets/images/ico_about_dark.svg'
import AboutLightIcon from '../assets/images/ico_about_light.svg'

const Header = () => {
  const location = useLocation()
  const isHome = location.pathname === '/'

  // Dark Mode
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') === 'dark'
    setIsDark(storedTheme)
    document.documentElement.classList.toggle('dark', storedTheme)
  }, [])

  const toggleDarkMode = () => {
    const nextTheme = !isDark
    setIsDark(nextTheme)
    document.documentElement.classList.toggle('dark', nextTheme)
    localStorage.setItem('theme', nextTheme ? 'dark' : 'light')
  }

  // scroll
  const scrollToSection = (id) => {
    const section = document.getElementById(id)
    section?.scrollIntoView({ behavior: 'smooth '})
  }

  return (
    <HeaderWrapper>
      {/* 공통 */}
      <HeaderMain>
        <p className="header-intro">
          안녕하세요. 소통하는 프론트엔드 개발자, 권정현입니다.
        </p>

        <div className="header-contact flex">
          <a href="mailto:zvnghyvn@gmail.com">zvnghyvn@gmail.com</a>
          <span>010-8377-7210</span>
          <div className="mode-toggle flex">
            <span>Mode</span>
            <ToggleDarkMode isDark={isDark} toggleDarkMode={toggleDarkMode} />
          </div>
        </div>
      </HeaderMain>

      {/* 홈 nav */}
      {isHome && (
        <HeaderNav>
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            {isDark ? <img src={AboutDarkIcon} alt="About" /> : <img src={AboutLightIcon} alt="About" />}
          </button>
          <button onClick={() => scrollToSection('Projects')}>Projects</button>
          <button onClick={() => scrollToSection('Experiences')}>Experiences</button>
        </HeaderNav>
      )}
    </HeaderWrapper>
  )
}

export default Header