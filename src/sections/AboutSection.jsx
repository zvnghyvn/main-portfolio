import { TypeAnimation } from 'react-type-animation'
import { About } from '@styles/sections/AboutSection.styles';

const AboutSection = () => {
 return (
  <About id="about">
    <h2>
      <TypeAnimation 
        sequence={['소통하는', 2000, '꾸준히 성장하는', 2000, '적응력이 빠른', 2000]}
        wrapper="span"
        speed={50}
        repeat={Infinity}
      />
      <br />
      프론트엔드 개발자, 권정현입니다 🖐
    </h2>

    <p className="about-info">
      <span className="point-word">효율적이고 깔끔한 코드</span> 와 <span className="point-word">간결한 설계</span> 를 먼저 생각하는
      <br />
      열정 가득한 프론트엔드 개발자예요
    </p>
  </About>
 )
}

export default AboutSection