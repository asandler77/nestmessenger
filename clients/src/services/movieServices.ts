import { netip } from '../consts';
import { MovieModel } from '../pages/movies/model';

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
