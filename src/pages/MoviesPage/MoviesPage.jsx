import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchSearchMovies } from '../../api/tmdb-api';
import { Field, Form, Formik } from 'formik';
import MovieList from '../../components/MovieList/ MovieList';
import Loader from '../../components/Loader/Loader';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import css from './MoviesPage.module.css';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [noFound, setNoFound] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') || '';

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setIsLoading(true);
        setIsError(false);
        if (query) {
          const results = await fetchSearchMovies(query);
          setNoFound(results.length === 0);
          setMovies(results);
        }
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
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
      <div>
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
      </div>
      {isError && <ErrorMessage />}
      {!isLoading && !isError && <MovieList movies={movies} />}
      {isLoading && <Loader />}
      {noFound && (
        <p className={css.nofound}>
          There are no movies you'd like... Please try again!
        </p>
      )}
    </div>
  );
};

export default MoviesPage;
