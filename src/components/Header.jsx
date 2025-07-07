import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const Header = () => {
  const location = useLocation()
  const isHome = location.pathname === '/'

  // Dark Mode
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') === 'dark'
    setIsDark(storedTheme)
    document.documentElement.classList.toggle('dark', storedTheme)
  })

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
    <header>
      {/* 공통 */}
      <div className="">
        <p>안녕하세요. 소통하는 프론트엔드 개발자, 권정현입니다.</p>
        <div className="">
          <a href="mailto:zvnghyvn@gmail.com">zvnghyvn@gmail.com</a>
          <span>010-8377-7210</span>
          <div className="">
            <span>Mode</span>
            <button onClick={toggleDarkMode}>토글</button>
          </div>
        </div>
      </div>

      {/* 홈 nav */}
      {isHome && (
        <nav>
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>About</button>
          <button onClick={() => scrollToSection('Projects')}>Projects</button>
          <button onClick={() => scrollToSection('Experiences')}>Experiences</button>
        </nav>
      )}
    </header>
  )
}

export default Header