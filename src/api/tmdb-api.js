import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const TOKEN =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlOTc4NmExZjU4NDIzYTNiZGJhMzZmY2MyOGYwM2RjYyIsInN1YiI6IjY2NWUyYjc4MzA5ZmYzMGI1YTIxOWU2ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.N-JciKOcxzTwVEQSj7EB-RtNlrsJOllghXooy4CCGQU';

export const fetchTrendingMovies = async () => {
  const response = await axios.get('trending/movie/day', {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  });
  return response.data.results;
};

export const fetchSearchMovies = async query => {
  const response = await axios.get('search/movie', {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
    params: {
      query,
      page: 1,
    },
  });
  return response.data.results;
};

export const fetchMovieDetails = async movieId => {
  const response = await axios.get(`movie/${movieId}`, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  });
  return response.data;
};

export const fetchMovieCredits = async movieId => {
  const response = await axios.get(`movie/${movieId}/credits`, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  });
  return response.data.cast;
};

export const fetchMovieReviews = async movieId => {
  const response = await axios.get(`movie/${movieId}/reviews`, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
    params: {
      page: 1,
    },
  });
  return response.data.results;
};
