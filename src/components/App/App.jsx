import { useEffect, useState } from 'react';
import fetchArticles from '../../articles-api';
import ArticlesList from '../ArticlesList/ArticlesList';
import SearchForm from '../SearchForm/SearchForm';

export default function App() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  // useEffect(() => {
  //   async function getArticles() {
  //     try {
  //       setIsLoading(true);
  //       const data = await fetchArticles();
  //       setError(false);
  //       setArticles(data);
  //     } catch (error) {
  //       setError(true);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   }
  //   getArticles();
  // }, []);

  const handleSearch = async newQuery => {
    console.log(newQuery);
    try {
      setIsLoading(true);
      const data = await fetchArticles(newQuery);
      setError(false);
      setArticles(data);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div>
      <h1>HTTP requests</h1>
      <SearchForm onSearch={handleSearch} />

      {error && <b>Error! Reload page!</b>}

      {isLoading && <b>Please wait, loading data...</b>}
      {articles.length > 0 && <ArticlesList items={articles} />}
    </div>
  );
}
