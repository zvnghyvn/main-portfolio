import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { HeaderWrapper, HeaderMain, HeaderNav } from '@styles/components/Header.styles'
import ToggleDarkMode from '@components/ToggleDarkMode'
import AboutDarkIcon from '../assets/images/ico_about_dark.svg'
import AboutLightIcon from '../assets/images/ico_about_light.svg'
import HomeDarkIcon from '../assets/images/ico_home_dark.svg'
import HomeLightIcon from '../assets/images/ico_home_light.svg'

const Header = () => {
  const location = useLocation()
  const isHome = location.pathname === '/'
  const navigate = useNavigate()

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
    setTimeout(() => {
      const section = document.getElementById(id);
      section?.scrollIntoView({ behavior: 'smooth' });
    }, 0.3);
  }

  return (
    <HeaderWrapper>
      {/* 공통 */}
      <HeaderMain>
        <h1 className="header-intro">
          AI를 적극 활용하는 개발자, 권정현입니다.
        </h1>

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
      {isHome ? (
        <HeaderNav>
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            {isDark ? <img src={AboutDarkIcon} alt="About" /> : <img src={AboutLightIcon} alt="About" />}
          </button>
          <button onClick={() => scrollToSection('projects')}>Projects</button>
          <button onClick={() => scrollToSection('experiences')}>Experiences</button>
        </HeaderNav>
      ) : (
        <HeaderNav>
          <Link to="/#projects">
            {isDark ? <img src={HomeDarkIcon} alt="Home" /> : <img src={HomeLightIcon} alt="Home" />}
          </Link>
          <button onClick={() => scrollToSection('intro')}>Intro</button>
          <button onClick={() => scrollToSection('contributions')}>Contributions</button>
          <button onClick={() => scrollToSection('retrospective')}>Retrospective</button>
        </HeaderNav>
      )}
    </HeaderWrapper>
  )
}

export default Header