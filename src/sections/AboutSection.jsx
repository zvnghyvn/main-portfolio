import { TypeAnimation } from 'react-type-animation'

const AboutSection = () => {
 return (
  <section id="about">
    <h1>
      <TypeAnimation 
        sequence={['소통하는', 2500, '꾸준히 성장하는', 2500, '적응력이 빠른', 2500]}
        wrapper="span"
        speed={50}
        repeat={Infinity}
      />
      <br />
      프론트엔드 개발자, 권정현입니다 🖐
    </h1>

    <p className="">
      <span>효율적이고 깔끔한 코드</span>와 <span>간결한 설계</span> 를 먼저 생각하는
      <br />
      열정 가득한 프론트엔드 개발자예요
    </p>
  </section>
 )
}

export default AboutSection