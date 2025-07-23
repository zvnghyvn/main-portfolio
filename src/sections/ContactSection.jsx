import { Contact } from '@styles/sections/ContactSection.styles';

const ContactSection = () => {
  return (
    <Contact id="contact">
      <h2>프론트엔드 개발자, 권정현이었습니다</h2>

      <p className="contact-info">
        연락처는 <span className="point-word">010-8377-7210</span> 와 <span className="point-word">zvnghyvn@gmail.com</span> 입니다<br />
        저에 대한 더 많은 정보는 <a href="https://github.com/zvnghyvn" target="_blank" className="point-word">Github</a> 와 <a href="https://www.notion.so/22cbb56acd1180bf911edfa68d30c80b?source=copy_link" target="_blank" className="point-word">Notion</a> 에서도 확인할 수 있어요<br />
        봐주셔서 감사합니다
      </p>
    </Contact>
  )
}

export default ContactSection