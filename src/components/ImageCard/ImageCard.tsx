import s from "./ImageCard.module.css";

import { Images } from "../../App/App.types";

interface ImageCardProps {
  image: Images;
}

const ImageCard: React.FC<ImageCardProps> = ({ image }) => {
  return (
    <div className={s.img}>
      <img
        className={s.galleryImage}
        src={image.urls.small}
        alt={image.alt_description}
      />
    </div>
  );
};

export default ImageCard;
