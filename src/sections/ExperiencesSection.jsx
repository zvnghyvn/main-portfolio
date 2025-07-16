import experienceList from '@data/experiences'
import { Experience } from '@styles/sections/ExperiencesSection.styles';

const ExperiencesSection = () => {
  return (
    <Experience id="experiences">
      <h2>Experiences</h2>

      <ul className="experiences-list">
        {experienceList.map((experience) => (
          <li key={experience.id}>
            {/* 상단 영역 */}
            <div className="experience-info flex">
              <div className="flex-left flex">
                <h3>{experience.workplace}</h3>
                <span className="experience-company">{experience.company}</span>
                <span className="experience-team">{experience.team}, {experience.position}</span>
              </div>
              
              <div className="flex-right flex">
                <span className="experience-period">{experience.period}</span>
                <span className="experience-total-period">{experience.totalPeriod}</span>
              </div>
            </div>

            {/* 하단 영역 */}
            <ul className="experience-features">
              {experience.features.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>

    </Experience>
  )
}

export default ExperiencesSection