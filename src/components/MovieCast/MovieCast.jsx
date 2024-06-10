import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCredits } from '../../api/tmdb-api';
import css from './MovieCast.module.css';

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetchMovieCredits(movieId).then(setCast);
  }, [movieId]);

  const defaultImg =
    'https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg';
  return (
    <div className={css.container}>
      <h2 className={css.title}>Movie Cast</h2>
      <ul className={css.list}>
        {cast.map(actor => (
          <li className={css.item} key={actor.id}>
            <img
              className={css.image}
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
                  : defaultImg
              }
              width={250}
              height={350}
              alt="actor"
            />
            <p className={css.name}>{actor.name}</p>
            <p className={css.character}>
              Character:
              <br />
              <span className={css.span}>{actor.character}</span>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default MovieCast;
