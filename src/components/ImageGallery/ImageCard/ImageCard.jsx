import css from './ImageCard.module.css';
function ImageCard({ image, onImageClick }) {
  return (
    <div onClick={onImageClick(image)} className={css.imgContainer}>
      <img
        className={css.img}
        src={image.urls.regular}
        alt={image.alt_description}
      />
      {/* <p>{image.alt_description}</p> */}
    </div>
  );
}
export default ImageCard;
