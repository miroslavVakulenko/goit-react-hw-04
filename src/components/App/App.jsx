// src\components\App\App.jsx
import SearchBar from '../SearchBar/SearchBar';
import css from './App.module.css';
import 'modern-css-reset';

import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import ImageGallery from '../ImageGallery/ImageGallery';
import Loader from '../Loader/Loader';
import { useState, useEffect } from 'react';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import fetchImages from '../../images-api';
import ImageModal from '../ImageModal/ImageModal';

export default function App() {
  const [isLoading, setIsLoading] = useState(false);

  const [searchValue, setSearchValue] = useState('');
  const [images, setImages] = useState([]);
  console.log(images);

  const [page, setPage] = useState(1);

  const handleSubmit = searchValue => {
    // console.log(searchValue.query);
    setSearchValue(searchValue.query);
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
        } catch (error) {
          console.log(error);
          throw error;
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

  return (
    <div className={css.wrapper}>
      <h4>Search</h4>
      <SearchBar className={css.searchBar} handleSubmit={handleSubmit} />
      <button onClick={clearItems}>Clear List</button>
      <p>under searxh</p>
      {searchValue.length < 1 && <ErrorMessage />}
      {isLoading && <Loader />}
      {images.length > 0 && <div className={css.gallery}>
        <ImageGallery images={images} />
      </div>}
      
      {images.length > 0 && (
        <LoadMoreBtn
          onClick={loadMoreImg}
          isLoading={isLoading}
          loader={<Loader />}
        />
      )}
      <ImageModal />
    </div>
  );
}
