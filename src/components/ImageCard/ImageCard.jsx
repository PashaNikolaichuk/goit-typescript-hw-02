import s from "./ImageCard.module.css";

const ImageCard = ({ image }) => {
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
