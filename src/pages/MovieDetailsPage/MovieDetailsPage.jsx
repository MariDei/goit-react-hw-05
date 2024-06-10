import { useState, useEffect } from 'react';
import {
  useParams,
  NavLink,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from 'react-router-dom';
import { fetchMovieDetails } from '../../api/tmdb-api';
import MovieCast from '../../components/MovieCast/MovieCast';
import MovieReviews from '../../components/MovieReviews/MovieReviews';
import css from './MovieDetailsPage.module.css';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const backLink = location.state?.from ?? '/movies';

  useEffect(() => {
    fetchMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  if (!movie) return;

  return (
    <>
      <button className={css.btn} onClick={() => navigate(backLink)}>
        Go back
      </button>
      <div className={css.container}>
        <div>
          <img
            className={css.image}
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            width={300}
            height={400}
            alt={movie.title}
          />
        </div>
        <div className={css.info}>
          <h2 className={css.title}>{movie.title}</h2>
          <p>
            <span className={css.description}>User Score: </span>{' '}
            {Math.round(movie.vote_average * 10)}%
          </p>
          <p>
            <span className={css.description}>Overview: </span>
            <br />
            {movie.overview}
          </p>
          <p>
            <span className={css.description}>Genres: </span>
            <br />
            {movie.genres.map(genre => (
              <span key={genre.id}>{genre.name} </span>
            ))}
          </p>
        </div>
      </div>
      <div className={css.wrapper}>
        <h3 className={css.information}>Additional information</h3>
        <ul className={css.list}>
          <li>
            <NavLink className={css.link} to="cast" state={backLink}>
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink className={css.link} to="reviews" state={backLink}>
              Reviews
            </NavLink>
          </li>
        </ul>
        <Routes>
          <Route path="/cast" element={<MovieCast />} />
          <Route path="/reviews" element={<MovieReviews />} />
        </Routes>
      </div>
    </>
  );
};

export default MovieDetailsPage;
