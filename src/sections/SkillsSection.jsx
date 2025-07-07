import skillList from '@data/skills'


const SkillsSection = () => {
  return (
    <section id="skills">
      <h2>다양한 스킬을 가지고 있어요</h2>

      <ul className="flex flex-nowrap gap-2">
        {skillList.map((skillGroup) => (
          <li key={skillGroup.category}>
            <h3>{skillGroup.category}</h3>

            <ul className="">
              {skillGroup.skills.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            {skillGroup.description && <p>{skillGroup.description}</p>}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default SkillsSection