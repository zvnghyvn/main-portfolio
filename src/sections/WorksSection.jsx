import workList from "@data/works"
import { Work } from '@styles/sections/WorkSection.styles';
import BlueArrowIcon from '../assets/images/ico_arrow_b.png'

const WorksSection = () => {
  return (
    <Work id="work">
      <h2>
        Work Projects
        <span className="title-sub">Web Publishing</span>
      </h2>

      <ul className="work-list flex">
        {workList.map((work) => (
          <li key={work.id}>
            {/* 상단 영역 */}
            <div className="work-title flex">
              <h3 className="flex-left">{work.title}</h3>
              <a href={work.url} target="_blank" className="flex-right">
                보러가기 <img src={BlueArrowIcon} alt="arrow" />
              </a>
            </div>

            {/* 이미지 영역 */}
            <div className="work-image">
              <a href={work.url} target="_blank">
                <img src={work.image.src} alt={work.image.alt} />
              </a>
            </div>

            {/* 인포 영역 */}
            <div className="work-info flex">
              <span className="info-client flex-left">Client: {work.client}</span>
              <span className="info-contribution flex-right">{work.contribution}</span>
            </div>

            {/* 내용 영역 */}
            <div className="work-description">
              <p>{work.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </Work>
  )
}

export default WorksSection