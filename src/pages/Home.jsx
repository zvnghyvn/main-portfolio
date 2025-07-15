
import About from '@sections/AboutSection'
import Skills from '@sections/SkillsSection'
import Projects from '@sections/ProjectsSection'
import Works from '@sections/WorksSection'
import Experiences from '@sections/ExperiencesSection'
import Education from '@sections/EducationSection'
import Certificates from '@sections/CertificatesSection'
import Contact from '@sections/ContactSection'

const Home = () => {
  return (
    <main>
      <div className="inner">
        <About />
        <Skills />
        <Projects />
        <Works />
        {/* <Experiences /> */}
        {/* <Education /> */}
        {/* <Certificates /> */}
        {/* <Contact /> */}
      </div>
    </main>
  )
}

export default Home