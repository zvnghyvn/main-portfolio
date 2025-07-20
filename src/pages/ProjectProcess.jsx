import { useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import projectProcess from '../data/projectProcess'
import { Process, ProcessBtns, ProcessThumb, ProcessOverview, ProcessIntro, ProcessTech, ProcessContribut, ProcessTrouble, ProcessFlow, ProcessReview } from '@styles/pages/ProjectProcess.styles';
import BlueArrowIcon from '../assets/images/ico_arrow_b.png'
import GlayArrowIcon from '../assets/images/ico_arrow_g.png'

const ProjectProcess = () => {
  // id로 프로젝트 찾기
  const { id } = useParams()
  const project = projectProcess.find((p) => p.id === id);
  if (!project) return <p>해당 프로젝트를 찾을 수 없습니다!</p>;


  return (
    <Process>
      <div className="process-card inner">
        <h2>{project.overview.name}</h2>

        {/* 링크 */}
        <ProcessBtns className="process-btns flex">
          {project.demoUrl && (
            <a href={project.demoUrl} target="_blank" className="btn-point">
              라이브 데모 <img src={BlueArrowIcon} alt="arrow" />
            </a>
          )}
          <a href={project.githubUrl} target="_blank" className="btn-point">
            깃허브 <img src={BlueArrowIcon} alt="arrow" />
          </a>
          <a href={project.videoUrl} target="_blank" className="btn-gray">
            시안 영상 <img src={GlayArrowIcon} alt="arrow" />
          </a>
          {project.presentationUrl && (
            <a href={project.presentationUrl} target="_blank" className="btn-gray">
              발표 영상 <img src={GlayArrowIcon} alt="arrow" />
            </a>
          )}
        </ProcessBtns>

        {/* 이미지 */}
        <ProcessThumb className="process-thumb">
          <img src={project.thumbnail} alt="프로젝트 화면 캡쳐" />
        </ProcessThumb>

        {/* 프로젝트 개요 */}
        <ProcessOverview className="process-overview">
          <h3>Project Overview</h3>

          <ul>
            <li><strong>작업 기간</strong>: {project.overview.period}</li>
            <li><strong>참여 인원</strong>: {project.overview.members}</li>
            <li><strong>기여도</strong>: {project.overview.role}</li>
          </ul>
        </ProcessOverview>

        {/* 프로젝트 소개 */}
        <ProcessIntro id="intro" className="process-intro">
          <h3>Project Intro</h3>

          <ul>
            <li>
              <h4>Description</h4>
              <ReactMarkdown>{project.intro.description}</ReactMarkdown>
            </li>
            <li>
              <h4>Purpose</h4>
              <ReactMarkdown>{project.intro.purpose}</ReactMarkdown>
            </li>
            <li>
              <a href={project.intro.notionUrl} target="_blank" className="btn-presentation">
                기획서 · 화면설계서 보러가기 <img src={BlueArrowIcon} alt="arrow" />
              </a>
            </li>
          </ul>
        </ProcessIntro>

        {/* 사용 기술 및 도구 */}
        <ProcessTech className="process-tech">
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
        </ProcessTech>

        {/* 주요 업무 및 구현 기능 */}
        <ProcessContribut id="contributions" className="process-contribut">
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
            <ul className="flex">
              {project.contribut.function.map((item, index) => (
                <li key={index}>
                  <span>{item.title}</span> <p>{item.content}</p>
                </li>
              ))}
            </ul>
          </div>
        </ProcessContribut>

        {/* 트러블 슈팅 */}
        <ProcessTrouble className="process-trouble">
          <h3>Troubleshooting</h3>

          {project.troubleshooting.map((item, index) => (
            <div key={index} className="trouble-item flex">
              <h4>{item.title.split('/n').map((line, index) => (
                <span key={index}>{line}</span>
              ))}</h4>
              
              <ul>
                <li>
                  <h5>Problem</h5>
                  <p>{item.problem}</p>
                </li>
                <li>
                  <h5>Solution</h5>
                  <p>{item.solution}</p>
                </li>
                {item.code && (
                  <li>
                    <h5>Code</h5>
                    <pre><code>{item.code}</code></pre>
                  </li>
                )}
                <li>
                  <h5>Result</h5>
                  <p>{item.result}</p>
                </li>
              </ul>
            </div>
          ))}
        </ProcessTrouble>

        {/* 프로젝트 흐름도 */}
        <ProcessFlow className="process-flow">
          <h3>Project Flow</h3>

          {project.flow.image && (
            <img src={project.flow.image} alt="프로젝트 흐름도" />
          )}
          <p>{project.flow.description}</p>
        </ProcessFlow>

        {/* 프로젝트 회고 */}
        <ProcessReview id="retrospective" className="process-review">
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
        </ProcessReview>

      </div>
    </Process>
  )
}

export default ProjectProcess