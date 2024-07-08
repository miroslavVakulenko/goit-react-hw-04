import { useEffect, useState } from 'react';
import fetchArticles from '../../articles-api';
import ArticlesList from '../ArticlesList/ArticlesList';
import SearchForm from '../SearchForm/SearchForm';

export default function App() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  // setQuery its for pagination for remember query on other pages
  const [query, setQuery] = useState('');
  //if we neednt input value for fetch, if we need fetch already page is opened, we use useEffect().
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
    setQuery(newQuery);
    setPage(1);
    //for next search to clear ul
    setArticles([]);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };
  useEffect(() => {
    // pattern: not fetch before submit search form
    // we pass mount
    if (query === '') {
      return;
    }
    async function getArticles() {
      try {
        setIsLoading(true);
        const data = await fetchArticles(query, page);
        //pattern: how rest el from State
        setArticles(prevArticles => {
          return [...prevArticles, ...data];
        });
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }

    getArticles();
  }, [query, page]);
  return (
    <div>
      <h1>HTTP requests</h1>
      <SearchForm onSearch={handleSearch} />

      {error && <b>Error! Reload page!</b>}

      {articles.length > 0 && <ArticlesList items={articles} />}

      {isLoading && <p>Please wait, loading data...</p>}

      {articles.length > 0 && !isLoading && (
        <button onClick={handleLoadMore}>Load more article</button>
      )}
    </div>
  );
}
