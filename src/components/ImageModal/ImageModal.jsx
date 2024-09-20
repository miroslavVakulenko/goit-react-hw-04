import Modal from 'react-modal';
import React from 'react';
function ImageModal({ selectedImage, setSelectedImage }) {
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setSelectedImage(selectedImage);
  }

  return (
    <div>
      {/* Show modal only if selectedImage is set */}
      {selectedImage && (
        <Modal
          isOpen={Boolean(selectedImage)}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Image Modal"
        >
          <h2>{selectedImage.alt_description}</h2>
          <img
            src={selectedImage.urls.regular}
            alt={selectedImage.alt_description}
          />
          <button onClick={closeModal}>Close</button>
        </Modal>
      )}
    </div>
  );
}
export default ImageModal;
