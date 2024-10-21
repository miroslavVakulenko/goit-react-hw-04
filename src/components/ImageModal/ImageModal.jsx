// src/components/ImageModal/ImageModal.jsx
import Modal from 'react-modal';
import css from './ImageModal.module.css';

Modal.setAppElement('#root'); // Потрібно для доступності

function ImageModal({ isOpen, onRequestClose, image }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Image Modal"
      className={css.modal}
      overlayClassName={css.overlay}
    >
      <button className={css.closeButton} onClick={onRequestClose}>
        &times;
      </button>
      {image && (
        <div className="imgContainer"><img
        className={css.modalImage}
        src={image.urls.regular}
        alt={image.alt_description}
      /></div>
        
      )}
    </Modal>
  );
}
export default ImageModal;
