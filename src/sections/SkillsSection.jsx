import skillList from '@data/skills'

const SkillsSection = () => {
  return (
    <section id="skills">
      <h2>다양한 스킬을 가지고 있어요</h2>

      <ul className="skill-list flex flex-nowrap gap-2">
        {skillList.map((skill) => (
          <li key={skill.id}>
            <h3>{skill.category}</h3>

            <ul className="">
              {skill.tools.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            {skill.description && <p>{skill.description}</p>}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default SkillsSection