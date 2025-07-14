import { Backdrop, Content, CloseButton } from '@styles/components/Modal.styles';

const Modal = ({ src, onClose }) => {
  if (!src) return null
  
  return (
    <Backdrop className="modal-backdrop flex" onClick={onClose}>
      <Content className="modal-content" onClick={(e) => e.stopPropagation()}>
        <CloseButton className="modal-close" onClick={onClose}>X</CloseButton>
        <img src={src} alt="확대 이미지" />
      </Content>
    </Backdrop>
  )
}

export default Modal