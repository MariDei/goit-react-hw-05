import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from '../../api/tmdb-api';
import css from './MovieReviews.module.css';

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchMovieReviews(movieId).then(setReviews);
  }, [movieId]);

  return (
    <>
      {reviews.length !== 0 ? (
        <div className={css.container}>
          <h2 className={css.title}>Movie Reviews</h2>
          <ul className={css.list}>
            {reviews.map(review => (
              <li className={css.item} key={review.id}>
                <h3 className={css.author}>
                  <span className={css.span}>Author: </span>
                  {review.author}
                </h3>
                <p className={css.description}>{review.content}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className={css.feedback}>
          We don't have any reviews for this movie...
        </div>
      )}
    </>
  );
};

export default MovieReviews;
