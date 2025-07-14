
import { Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import { Card } from '@styles/components/ProjectCard.styles';
import BlueArrowIcon from '../assets/images/ico_arrow_b.png'
import GlayArrowIcon from '../assets/images/ico_arrow_g.png'

const ProjectCard = ({ project, onImageClick }) => {
  // 이미지 클릭 시
  const handleImageClick = (src) => {
    onImageClick(src)
  }

  const closeModal = () => {
    onImageClick(null)
  }

  return (
    <Card className="project-card flex">
      {/* 왼쪽 영역 */}
      <div className="project-info">
        <span className="project-keyword">{project.keyword}</span>
        <h3>{project.title}</h3>
        <span className="project-type">{project.type}</span>
        <span className="project-contribution">{project.contribution}</span>
        <span className="project-period">{project.period}</span>

        <div className="project-btns">
          <Link to={`/project/process/${project.id}`} className="btn-detail">
            작업 과정 보기 <img src={BlueArrowIcon} alt="arrow" />
          </Link>
          <a href={project.demoUrl} target="_blank" className="btn-demo">
            데모 사이트 보기 <img src={GlayArrowIcon} alt="arrow" />
          </a>
        </div>
      </div>

      {/* 오른쪽 영역 */}
      <div className="project-details">
        <h4>Description</h4>

        <div key={project.id} className="project-description">
          <ReactMarkdown>{project.description}</ReactMarkdown>
        </div>

        <ul className="project-features">
          {project.features.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <div className="project-media flex">
          {project.media.map((item, index) => (
            item.type === 'image' ? (
              <img key={index} src={item.src} alt={item.alt} onClick={() => handleImageClick(item.src)}/>
            ) : (
              <a key={index} href={item.link} target="_blank">
                <img src={item.src} alt={item.alt} />
              </a>
            )
          ))}
        </div>

        <div className="project-tech flex">
          <span>Tech Stack</span>
          {project.techStack.join(', ')}
        </div>

        <div className="project-tools flex">
          <span>Tools</span>
          {project.tools.join(', ')}
        </div>
      </div>
    </Card>
  )
}

export default ProjectCard