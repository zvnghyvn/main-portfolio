const Modal = ({ src, onClose }) => {
  if (!src) return null
  
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>X</button>
        <img src={src} alt="확대 이미지" />
      </div>
    </div>
  )
}

export default Modal