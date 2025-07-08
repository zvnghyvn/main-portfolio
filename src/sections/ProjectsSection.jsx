import ProjectCard from '@components/ProjectCard'
import projectList from '@data/projects'
import { useState } from 'react'
import Modal from '@components/Modal'

const ProjectsSection = () => {
  const [modalImage, setModalImage] = useState(null)

  return (
    <section id="projects">
      <h2>Projects</h2>

      {projectList.map((project) => (
        <ProjectCard key={project.id} project={project} onImageClick={setModalImage} />
      ))}

      {modalImage && (
        <Modal src={modalImage} onClose={() => setModalImage(null)} />
      )}
    </section>
  )
}

export default ProjectsSection