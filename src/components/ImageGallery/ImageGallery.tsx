import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

import { Images } from "../../App/App.types";

interface ImageGellerryProps {
  images: Images[];
  onImageClick: (image: Images) => void;
}

const ImageGellerry: React.FC<ImageGellerryProps> = ({
  images,
  onImageClick,
}) => {
  return (
    <ul className={s.gallery}>
      {images.map((image) => (
        <li
          key={image.id}
          className={s.galleryItem}
          onClick={() => onImageClick(image)}
        >
          <ImageCard image={image} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGellerry;
