import { netip } from '../consts';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const handleLogIn = (dispatchLogIn: () => void) => {
  const url = `http://${netip}:3000/auth/login`;
  const networkOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      userName: 'Anna9',
      password: 'lada',
    }),
  };
  fetch(url, networkOptions)
    .then(res => res.json())
    .then(data => {
      AsyncStorage.setItem('authToken', data.access_token);
      dispatchLogIn();
    })
    .catch(err => console.log(err));
};

export const createUser = async () => {
  const url = `http://${netip}:3000/auth/create`;
  const networkOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      userName: 'Alexey',
      password: 'Alexey',
    }),
  };
  fetch(url, networkOptions).then(res => res.json());
};
