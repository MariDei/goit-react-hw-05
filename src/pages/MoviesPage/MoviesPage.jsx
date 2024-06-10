import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchSearchMovies } from '../../api/tmdb-api';
import { Field, Form, Formik } from 'formik';
import MovieList from '../../components/MovieList/ MovieList';
import css from './MoviesPage.module.css';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') || '';

  useEffect(() => {
    const fetchMovies = async () => {
      if (query) {
        const results = await fetchSearchMovies(query);
        setMovies(results);
      }
    };
    fetchMovies();
  }, [query]);

  const handleSearch = async e => {
    e.preventDefault();
    const Form = e.target;
    const query = Form.elements.query.value;
    if (query) {
      setSearchParams({ query });
    }
  };
  return (
    <div>
      <header className={css.header}>
        <Formik>
          <Form className={css.form} onSubmit={handleSearch}>
            <Field
              className={css.input}
              name="query"
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search movies"
            />
            <button className={css.btn} type="submit">
              Search
            </button>
          </Form>
        </Formik>
      </header>
      {movies && <MovieList movies={movies} />}
    </div>
  );
};

export default MoviesPage;
