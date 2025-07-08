
import { Link } from 'react-router-dom'

const ProjectCard = ({ project, onImageClick }) => {
  // 이미지 클릭 시
  const handleImageClick = (src) => {
    onImageClick(src)
  }

  const closeModal = () => {
    onImageClick(null)
  }

  return (
    <div className="project-card flex">
      {/* 왼쪽 영역 */}
      <div className="project-info">
        <span className="project-keyword">{project.keyword}</span>
        <h3>{project.title}</h3>
        <span className="project-type">{project.type}</span>
        <span className="project-contribution">{project.contribution}</span>
        <span className="project-period">{project.period}</span>

        <div className="project-btns">
          <Link to={project.detailPage} className="btn-detail">
            작업 과정 보기 &gt;
          </Link>
          <a href={project.demoUrl} target="_blank" className="btn-demo">
            데모 사이트 보기 &gt;
          </a>
        </div>
      </div>

      {/* 오른쪽 영역 */}
      <div className="project-details">
        <h4>Description</h4>
        <div className="project-description">
          <span>📌</span>
          {project.description.split('/n').map((line, index) => (
            <p key={index}>
              <span>{line}</span>
              <br />
            </p>
          ))}
        </div>
        <ul className="project-features">
          {project.features.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <div className="project-media">
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
        <div className="project-tech">
          <span>Tech Stack</span>
          <ul>
            {project.techStack.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="project-tools">
          <span>Tools</span>
          <ul>
            {project.tools.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard