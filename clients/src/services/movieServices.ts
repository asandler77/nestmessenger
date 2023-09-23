import { netip } from '../consts';

export const addMovie = (movieName: string) => {
  const url = `http://${netip}:3000/movies/add-movie`;
  const networkOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      movie: movieName,
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
