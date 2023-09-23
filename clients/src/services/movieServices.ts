import { netip } from '../consts';
import { MovieModel } from '../pages/movies/model';
import { response } from 'express';

export const getAll = async () => {
  const url = `http://${netip}:3000/movies`;
  const networkOptions = {
    method: 'GET',
  };
  try {
    const res = await fetch(url, networkOptions);
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }

    const movies = await res.json();
    return movies;
  } catch (error) {
    console.error('Error fetching movies:', error);
    throw error; // Propagate the error
  }
};

export const addMovie = (movie: MovieModel) => {
  const url = `http://${netip}:3000/movies/add-movie`;
  const networkOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: movie.name,
      url: movie.url,
      score: movie.score,
    }),
  };
  fetch(url, networkOptions).then(res => res.json());
};

export const deleteAll = () => {
  const url = `http://${netip}:3000/movies/delete-all`;
  const networkOptions = {
    method: 'DELETE',
  };
  fetch(url, networkOptions)
    .then(res => res.json())
    .catch(err => console.log(`Delete failed due to ${err}`));
};
