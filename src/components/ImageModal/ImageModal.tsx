import s from "./ImageModal.module.css";
import Modal from "react-modal";
// Прив'язка до #root
Modal.setAppElement("#root");

import { Images } from "../../App/App.types";

interface ImageModalProps {
  isOpen: boolean;
  isClose: () => void;
  image: Images | null;
}

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, isClose, image }) => {
  // Перевірка, чи існує об'єкт `image`
  if (!image) return null;

  return (
    <Modal
      isOpen={isOpen}
      // Закриває вікно при кліку поза ним або натисканні Esc
      onRequestClose={isClose}
      className={s.containerModal}
      overlayClassName={s.overlay}
    >
      <div className={s.modalContent}>
        <button onClick={isClose} className={s.closeButton}>
          ✖
        </button>

        <img
          src={image.urls.regular}
          alt={image.alt_description}
          className={s.imgModal}
        />
        <p className={s.imageDescription}>
          <strong>Description: </strong>
          {image.alt_description || "No description available"}
        </p>
        <p className={s.imageDescription}>
          <strong>Likes: </strong>
          {image.likes}
        </p>
        <p className={s.imageDescription}>
          <strong>Created At: </strong>
          {new Date(image.created_at).toLocaleDateString()}
        </p>
      </div>
    </Modal>
  );
};

export default ImageModal;
