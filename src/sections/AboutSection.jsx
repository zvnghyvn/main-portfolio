import { TypeAnimation } from 'react-type-animation'
import { About } from '@styles/sections/AboutSection.styles';

const AboutSection = () => {
 return (
  <About id="about">
    <h2>
      <TypeAnimation 
        sequence={['AI를 적극 활용하는', 2000, '구조화를 좋아하는', 2000, '소통하는', 2000]}
        wrapper="span"
        speed={50}
        repeat={Infinity}
      />
      <br />
      개발자 권정현입니다 🖐
    </h2>

    <p className="about-info">
      <span className="point-word">효율적인 방법</span> 과 <span className="point-word">깔끔하고 간결한 설계</span> 를 먼저 생각하는
      <br />
      열정 가득한 개발자예요
    </p>
  </About>
 )
}

export default AboutSection