import ProjectCard from '@components/ProjectCard'
import projectList from '@data/projects'
import { useState } from 'react'
import Modal from '@components/Modal'
import { Project } from '@styles/sections/ProjectSection.styles';

const ProjectsSection = () => {
  const [modalImage, setModalImage] = useState(null)

  return (
    <Project id="projects">
      <h2>
        Personal Projects
        <span className="title-sub">Front-end</span>
      </h2>

      {projectList.map((project) => (
        <ProjectCard key={project.id} project={project} onImageClick={setModalImage} />
      ))}

      {modalImage && (
        <Modal src={modalImage} onClose={() => setModalImage(null)} />
      )}
    </Project>
  )
}

export default ProjectsSection