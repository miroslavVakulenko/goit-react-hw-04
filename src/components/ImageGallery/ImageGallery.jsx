import ImageCard from './ImageCard/ImageCard';
import css from '../ImageGallery/ImageGallery.module.css';

function ImageGallery({ images, onImageClick }) {
  return (
    <ul className={css.imageList}>
      {images.map(image => (
        <li
          onClick={() => onImageClick(image)}
          className={css.galleryItem}
          key={image.id}
        >
          <ImageCard onImageClick={onImageClick} image={image} />
        </li>
      ))}
    </ul>
  );
}
export default ImageGallery;
