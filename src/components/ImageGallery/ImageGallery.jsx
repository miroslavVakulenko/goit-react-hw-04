import ImageCard from './ImageCard/ImageCard';
import css from '../ImageGallery/ImageGallery.module.css';

function ImageGallery({ images, onImageClick }) {
  return (
    <ul className={css.imageList}>
      {images.map(image => (
        <li
          className={css.galleryItem}
          key={image.id}
          onClick={() => onImageClick(image)}
        >
          <ImageCard image={image} />
        </li>
      ))}
    </ul>
  );
}
export default ImageGallery;
