import { useEffect, useState } from 'react';
import fetchArticles from '../../articles-api';
import ArticlesList from '../ArticlesList/ArticlesList';
import SearchForm from '../SearchForm/SearchForm';

export default function App() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const [query, setQuery] = useState('');

  const handleSearch = newQuery => {
    setQuery(newQuery);
  };

  useEffect(() => {
    async function getArticles() {
      try {
        setIsLoading(true);
        const data = await fetchArticles(query);
        setError(false);
        setArticles(data);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getArticles();
  }, []);

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
