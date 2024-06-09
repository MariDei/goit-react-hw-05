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
// import css from './MovieDetailsPage.module.css'

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
      <button onClick={() => navigate(backLink)}>Go back</button>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          width={300}
          height={400}
          alt={movie.title}
        />
        <div>
          <h2>{movie.title}</h2>
          <p>User Score: {movie.vote_average}</p>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <h3>Genres</h3>
          <p>
            {movie.genres.map(genre => (
              <span key={genre.id}>{genre.name} </span>
            ))}
          </p>
        </div>
      </div>
      <div>
        <h3>Additional information</h3>
        <ul>
          <li>
            <NavLink to="cast" state={backLink}>
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink to="reviews" state={backLink}>
              Reviews
            </NavLink>
          </li>
        </ul>
        <Routes>
          <Route path="/cast" element={<MovieCast />} />
          <Route path="/reviews" element={<MovieReviews />} />
        </Routes>
        {/* </Suspense> */}
      </div>
    </>
  );
};

export default MovieDetailsPage;
