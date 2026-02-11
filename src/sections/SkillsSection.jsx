import skillList from '@data/skills'
import { Skill } from '@styles/sections/SkillSection.styles'

const SkillsSection = () => {
  return (
    <Skill id="skills">
      <h2>다양한 스킬을 가지고 있어요</h2>

      <ul className="skill-list flex">
        {skillList.map((skill) => (
          <li key={skill.id}>
            <h3>{skill.category}</h3>

            <ul className="skill-tool flex">
              {skill.tools.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            {skill.description && (
              <p className="skill-description">
                {skill.url ? (
                  <a href={skill.url}>{skill.description}</a>
                ) : (
                  skill.description
                )}
              </p>
            )}
          </li>
        ))}
      </ul>
    </Skill>
  )
}

export default SkillsSection