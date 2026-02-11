import educationList from "@data/educations"
import { Education } from '@styles/sections/EducationSection.styles';

const EducationSection = () => {
  return (
    <Education id="education">
      <h2 className="title-sm">Education & Achievements</h2>

      <ul className="education-list">
        {educationList.map((education) => (
          <li key={education.id} className="flex">
            {/* 왼쪽 영역 */}
            <div className="education-info flex-left">
              <h4>{education.title.split('/n').map((line, index) => (
                <span key={index}>{line}</span>
              ))}</h4>
              <span className="education-period">{education.period}</span>
            </div>
            
            {/* 오른쪽 영역 */}
            <ul className="education-features flex-left">
              {education.features.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </Education>
  )
}

export default EducationSection