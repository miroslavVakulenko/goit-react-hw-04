// src\components\App\App.jsx
import SearchBar from '../SearchBar/SearchBar';
import css from './App.module.css';
import 'modern-css-reset';
import toast from 'react-hot-toast';

import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import ImageGallery from '../ImageGallery/ImageGallery';
import Loader from '../Loader/Loader';
import { useState, useEffect } from 'react';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import fetchImages from '../../images-api';
// import ImageModal from '../ImageModal/ImageModal';

export default function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [notification, setNotification] = useState(false);

  const [searchValue, setSearchValue] = useState('');
  const [images, setImages] = useState([]);
  console.log(images);

  const [page, setPage] = useState(1);

  const handleSubmit = searchValue => {
    // console.log(searchValue.query);
    setSearchValue(searchValue.query);
    setNotification(false);
  };
  const clearItems = () => {
    setImages([]);
  };

  useEffect(() => {
    if (searchValue) {
      const getImages = async () => {
        try {
          setIsLoading(true);
          const data = await fetchImages(searchValue, page);
          setImages(prevImages => [...prevImages, ...data]);
        } catch (err) {
          console.log(err);
          console.log('aaaaa');
          setError(true);
          handleErrorNotification();
        } finally {
          console.log('done');
          setIsLoading(false);
        }
      };
      getImages();
    }
  }, [searchValue, page]);

  const loadMoreImg = () => {
    setPage(prevPage => prevPage + 1);
  };

  const handleNotification = () => {
    setNotification(true);
  };

  const handleErrorNotification = () => {
    toast.error('An error occurred while fetching images');
  };
  return (
    <div className={css.wrapper}>
      {error && <ErrorMessage />}
      <h4>Search</h4>
      <SearchBar
        className={css.searchBar}
        handleSubmit={handleSubmit}
        errorNotification={handleNotification}
      />
      <button onClick={clearItems}>Clear List</button>
      {/* {searchValue.length < 1 && <ErrorMessage notification={notification} />} */}
      {notification && <ErrorMessage />}
      {isLoading && <Loader />}
      <div className={css.gallery}>
        <ImageGallery images={images} />
      </div>
      {images.length > 0 && (
        <LoadMoreBtn
          onClick={loadMoreImg}
          isLoading={isLoading}
          loader={<Loader />}
        />
      )}
    </div>
  );
}
