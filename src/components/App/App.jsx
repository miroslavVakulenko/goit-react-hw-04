import SearchBar from '../SearchBar/SearchBar';
import 'modern-css-reset';
import css from './App.module.css';
// import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import ImageGallery from '../ImageGallery/ImageGallery';
// import Loader from '../Loader/Loader';
import { useState, useEffect } from 'react';
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

  useEffect(() => {
    if (searchValue) {
      const getImages = async () => {
        try {
          const data = await fetchImages(searchValue);
          setImages(data);
        } catch (error) {
          console.log(error);
        } finally {
          console.log('done');
        }
      };
      getImages();
    }
  }, [searchValue]);

  return (
    <div className={css.wrapper}>
      <SearchBar handleSubmit={handleSubmit} />
      {searchValue.length < 1 && <ErrorMessage />}
      <ImageGallery images={images} />
    </div>
  );
}
