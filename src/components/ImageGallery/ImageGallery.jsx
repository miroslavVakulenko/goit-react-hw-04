import ImageCard from './ImageCard/ImageCard';

function ImageGallery(images) {
  return (
    <ul>
      {/* Набір елементів списку із зображеннями */}
      <li>
        <ImageCard />
      </li>
    </ul>
  );
}
export default ImageGallery;
