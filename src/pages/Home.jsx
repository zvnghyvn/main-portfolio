
import About from '@sections/AboutSection'
import Skills from '@sections/SkillsSection'
import Projects from '@sections/ProjectsSection'
import Experiences from '@sections/ExperiencesSection'
import Education from '@sections/EducationSection'
import Certificates from '@sections/CertificatesSection'
import Contact from '@sections/ContactSection'

const Home = () => {
  return (
    <>
      <main>
        <About />
        <Skills />
        <Projects />
        <Experiences />
        <Education />
        <Certificates />
        <Contact />
      </main>
    </>
  )
}

export default Home