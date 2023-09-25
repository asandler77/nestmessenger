import { netip } from '../consts';
import { MovieModel } from '../pages/movies/model';
import { showToast } from '../components/common/Toasts';

export const getAll = async () => {
  const url = `http://${netip}:3000/movies`;
  const networkOptions = {
    method: 'GET',
  };
  try {
    const res = await fetch(url, networkOptions);
    if (!res.ok) {
      showToast('error', 'Some thing went wrong', 'Try again later');
      // throw new Error('Network response was not ok');
    } else {
      showToast('success', 'The action executed successfully', 'All movies loaded successfully');
    }

    const movies = await res.json();
    return movies;
  } catch (error) {
    console.error('Error fetching movies:', error);
    throw error; // Propagate the error
  }
};

export const addMovie = async (movie: MovieModel) => {
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
  const res = await fetch(url, networkOptions);
  if (!res.ok) {
    showToast('error', 'Some thing went wrong', 'Try again later');
    // throw new Error('Network response was not ok');
  } else {
    showToast('success', 'The action executed successfully', 'Movie added successfully');
  }
};

// const showToast = (type: string, text1: string, text2: string) => {
//   Toast.show({
//     type,
//     text1,
//     text2,
//     position: 'bottom',
//   });
// };

export const deleteAll = async () => {
  const url = `http://${netip}:3000/movies/delete-all`;
  const networkOptions = {
    method: 'DELETE',
  };

  try {
    const res = await fetch(url, networkOptions);
    if (!res.ok) {
      showToast('error', 'Some thing went wrong', 'Try again later');
      // throw new Error('Network response was not ok');
    } else {
      showToast('success', 'The action executed successfully', 'All movies deleted');
    }
  } catch (error) {
    // console.error('Error fetching movies:', error);
    // throw error; // Propagate the error
  }
};
