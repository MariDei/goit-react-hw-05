import { useState, useEffect } from 'react';
import { fetchTrendingMovies } from '../../api/tmdb-api';
import MovieList from '../../components/MovieList/ MovieList';
import css from './HomePage.module.css';

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovies().then(setMovies);
  }, []);

  return (
    <div className={css.container}>
      <h1 className={css.title}>Trending Movies</h1>
      <MovieList movies={movies} />
    </div>
  );
};

export default HomePage;
