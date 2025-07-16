import { useEffect } from 'react'
import About from '@sections/AboutSection'
import Skills from '@sections/SkillsSection'
import Projects from '@sections/ProjectsSection'
import Works from '@sections/WorksSection'
import Experiences from '@sections/ExperiencesSection'
import Education from '@sections/EducationSection'
import Certificates from '@sections/CertificatesSection'
import Contact from '@sections/ContactSection'

const Home = () => {
  // 스크롤
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const id = hash.replace('#', '');
      const section = document.getElementById(id);
      section?.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <main>
      <div className="inner">
        <About />
        <Skills />
        <Projects />
        <Works />
        <Experiences />
        <Education />
        <Certificates />
        <Contact />
      </div>
    </main>
  )
}

export default Home