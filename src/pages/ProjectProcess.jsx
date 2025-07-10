import processList from '@data/projectProcess'

const ProjectProcess = () => {
  return (
    <div className="process-wrap">
      {processList.map((process) => (
        <div className="process-card">
          <h2>{process.name}</h2>

          {/* 링크 */}
          <div className="process-btns">
            <a href={process.demoUrl} target="_blank" className="btn-demo">
              데모 사이트 &gt;
            </a>
            <a href={process.githubUrl} target="_blank" className="btn-github">
              깃허브 보기 &gt;
            </a>
            <a href={process.videoUrl} target="_blank" className="btn-video">
              프로젝트 시안 영상 &gt;
            </a>
            <a href={process.presentationUrl} target="_blank" className="btn-presentation">
              발표 영상 URL &gt;
            </a>
          </div>

          {/* 이미지 */}
          <div className="process-thumb">
            <img src={process.thumbnail} alt="프로젝트 화면 캡쳐" />
          </div>

          {/* 프로젝트 개요 */}

          {/* 프로젝트 소개 */}

          {/* 사용 기술 및 도구 */}

          {/* 주요 업무 및 구현 기능 */}

          {/* 트러블 슈팅 */}

          {/* 프로젝트 흐름도 */}

          {/* 프로젝트 회고 */}

        </div>
      ))}
    </div>
  )
}

export default ProjectProcess