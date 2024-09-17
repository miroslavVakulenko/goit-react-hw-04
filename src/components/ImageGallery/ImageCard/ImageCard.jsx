import css from './ImageCard.module.css';
function ImageCard({ image }) {
  return (
    <div className={css.imgContainer}>
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
