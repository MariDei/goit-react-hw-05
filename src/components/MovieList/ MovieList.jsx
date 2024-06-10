import { useLocation, NavLink } from 'react-router-dom';
import css from './ MovieList.module.css';

const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul className={css.list}>
      {movies.map(movie => (
        <li className={css.item} key={movie.id}>
          <NavLink to={`/movies/${movie.id}`} state={location}>
            <h3 className={css.title}>{movie.title}</h3>
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
