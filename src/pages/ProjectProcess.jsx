import { useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import projectProcess from '../data/projectProcess'
import { Process } from '@styles/pages/ProjectProcess.styles';
import BlueArrowIcon from '../assets/images/ico_arrow_b.png'
import GlayArrowIcon from '../assets/images/ico_arrow_g.png'

const ProjectProcess = () => {
  // id로 프로젝트 찾기
  const { id } = useParams()
  const project = projectProcess.find((p) => p.id === id);
  if (!project) return <p>해당 프로젝트를 찾을 수 없습니다!</p>;


  return (
    <Process>
      <div className="process-wrap inner">
        <div className="process-card">
          <h2>{project.overview.name}</h2>

          {/* 링크 */}
          <div className="process-btns">
            <a href={project.demoUrl} target="_blank" className="btn-demo">
              데모 사이트 <img src={BlueArrowIcon} alt="arrow" />
            </a>
            <a href={project.githubUrl} target="_blank" className="btn-github">
              깃허브 보기 <img src={BlueArrowIcon} alt="arrow" />
            </a>
            <a href={project.videoUrl} target="_blank" className="btn-video">
              프로젝트 시안 영상 <img src={GlayArrowIcon} alt="arrow" />
            </a>
            <a href={project.presentationUrl} target="_blank" className="btn-presentation">
              발표 영상 URL <img src={GlayArrowIcon} alt="arrow" />
            </a>
          </div>

          {/* 이미지 */}
          <div className="process-thumb">
            <img src={project.thumbnail} alt="프로젝트 화면 캡쳐" />
          </div>

          {/* 프로젝트 개요 */}
          <section className="process-overview">
            <h3>Project Overview</h3>

            <ul>
              <li><strong>작업 기간:</strong> {project.overview.period}</li>
              <li><strong>참여 인원:</strong> {project.overview.members}</li>
              <li><strong>기여도:</strong> {project.overview.role}</li>
            </ul>
          </section>

          {/* 프로젝트 소개 */}
          <section id="intro" className="process-intro">
            <h3>Project Intro</h3>

            <ul>
              <li>
                <h4>description</h4>
                <ReactMarkdown>{project.intro.description}</ReactMarkdown>
              </li>
              <li>
                <h4>purpose</h4>
                <ReactMarkdown>{project.intro.purpose}</ReactMarkdown>
              </li>
              <li>
                <a href={project.intro.notionUrl} target="_blank" className="btn-presentation">
                  기획서·화면설계서 보기 <img src={GlayArrowIcon} alt="arrow" />
                </a>
              </li>
            </ul>
          </section>

          {/* 사용 기술 및 도구 */}
          {/* <section className="process-tech">
            <h3>Tech Stack & Tools</h3>

            <table>
              <thead>
                <tr>
                  <th>Category</th>
                  <th>Tech</th>
                  <th>Reason</th>
                </tr>
              </thead>
              <tbody>
                {project.techStack.map((item, index) => (
                  <tr key={index}>
                    <td>{item.category}</td>
                    <td>{item.tech.join(', ')}</td>
                    <td>{item.reason}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section> */}

          {/* 주요 업무 및 구현 기능 */}
          {/* <section id="contributions" className="process-contribut">
            <h3>Project Contributions</h3>

            <div className="contribut-role">
              <h4>Role & Contribution</h4>
              <ul>
                {project.contribut.role.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="contribut-function">
              <h4>Key Features</h4>
              <ul>
                {project.contribut.function.map((item, index) => (
                  <li key={index}>
                    <strong>{item.title}:</strong> {item.content}
                  </li>
                ))}
              </ul>
            </div>
          </section> */}

          {/* 트러블 슈팅 */}
          {/* <section className="process-trouble">
            <h3>Troubleshooting</h3>

            {project.troubleshooting.map((item, index) => (
              <div key={index} className="trouble-item">
                <h4>{item.title}</h4>
                
                <ul>
                  <li>
                    <h5>문제 상황</h5>
                    <p>{item.problem}</p>
                  </li>
                  <li>
                    <h5>해결 방법</h5>
                    <p>{item.solution}</p>
                  </li>
                  {item.code && (
                    <li>
                      <h5>관련 코드</h5>
                      <pre><code>{item.code}</code></pre>
                    </li>
                  )}
                  <li>
                    <h5>결과</h5>
                    <p>{item.result}</p>
                  </li>
                </ul>
              </div>
            ))}
          </section> */}

          {/* 프로젝트 흐름도 */}
          {/* <section className="process-flow">
            <h3>Project Flow</h3>

            {project.flow.image && (
              <img src={project.flow.image} alt="프로젝트 흐름도" />
            )}
            <p>{project.flow.description}</p>
          </section> */}

          {/* 프로젝트 회고 */}
          {/* <section id="retrospective" className="process-review">
            <h3>Retrospective</h3>
            
            <ul>
              <li>
                <h4>잘한 점</h4>
                <p>{project.review.good}</p>
              </li>
              <li>
                <h4>어려웠던 점</h4>
                <p>{project.review.hard}</p>
              </li>
              <li>
                <h4>아쉬운 점</h4>
                <p>{project.review.regret}</p>
              </li>
              <li>
                <h4>개선 방향</h4>
                <p>{project.review.improve}</p>
              </li>
            </ul>
          </section> */}

        </div>
      </div>
    </Process>
  )
}

export default ProjectProcess