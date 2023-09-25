import { netip } from '../consts';
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
