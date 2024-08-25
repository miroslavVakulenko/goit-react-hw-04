import SearchBar from '../SearchBar/SearchBar';
// import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import ImageGallery from '../ImageGallery/ImageGallery';
// import Loader from '../Loader/Loader';
import { useState } from 'react';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import fetchImages from '../../images-api';
// import ImageModal from '../ImageModal/ImageModal';
export default function App() {
  // const [isLoading, setIsLoading] = useState(false);

  const [searchValue, setSearchValue] = useState('');
  const [images, setImages] = useState([]);
  console.log(images);

  const handleSubmit = searchValue => {
    // console.log(searchValue.query);
    setSearchValue(searchValue.query);
  };
  async function getImages() {
    try {
      const data = await fetchImages(searchValue);
      setImages(data);
    } catch (error) {
      console.log(error);
    }
  }
  getImages();
  return (
    <div>
      <SearchBar handleSubmit={handleSubmit} />
      {searchValue.length < 1 && <ErrorMessage />}
      <ImageGallery data={images} />
    </div>
  );
}
