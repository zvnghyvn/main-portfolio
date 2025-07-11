import ReactMarkdown from 'react-markdown'
import workList from "@data/works"

const WorksSection = () => {
  return (
    <section id="works">
      <h2>
        Work Projects
        <span>Web Publishing</span>
      </h2>

      <ul>
        {workList.map((work) => (
          <li key={work.id}>
            {/* 상단 영역 */}
            <div className="work-title flex">
              <h3 className="flex-left">{work.title}</h3>
              <a href={work.url} target="_blank" className="flex-right">보러가기 &gt;</a>
            </div>

            {/* 이미지 영역 */}
            <div className="work-image">
              <img src={work.image.src} alt={work.image.alt} />
            </div>

            {/* 인포 영역 */}
            <div className="work-info flex">
              <span className="flex-left">Client: {work.client}</span>
              <span className="flex-right">{work.contribution}</span>
            </div>

            {/* 내용 영역 */}
            <div className="work-description">
              <ReactMarkdown>{work.description}</ReactMarkdown>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default WorksSection