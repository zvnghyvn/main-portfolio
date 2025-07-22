import { useEffect } from 'react'
import { Backdrop, Content } from '@styles/components/Modal.styles'
import CancelIcon from '../assets/images/ico_cancel.svg'

const Modal = ({ src, onClose }) => {

  // 스크롤 막기
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    document.documentElement.style.overflow = 'hidden'
    
    return () => {
      document.body.style.overflow = ''
      document.documentElement.style.overflow = ''
    }
  }, [])

  if (!src) return null
  
  return (
    <Backdrop className="modal-backdrop flex" onClick={onClose}>
      <Content className="modal-content flex" onClick={(e) => e.stopPropagation()}>
        <div><img src={src} alt="확대 이미지" /></div>
        <button className="modal-close" onClick={onClose}><img src={CancelIcon} alt="" /></button>
      </Content>
    </Backdrop>
  )
}

export default Modal