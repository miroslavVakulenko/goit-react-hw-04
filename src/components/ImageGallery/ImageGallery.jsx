import ImageCard from './ImageCard/ImageCard';
import css from '../ImageGallery/ImageGallery.module.css';

function ImageGallery({ images }) {
  return (
    <ul className={css.imageList}>
      {images.map(image => (
        <li key={image.id}>
          <ImageCard image={image} />
        </li>
      ))}
    </ul>
  );
}
export default ImageGallery;
