import AsyncStorage from '@react-native-async-storage/async-storage';

const getTokenId = (): Promise<string> =>
  AsyncStorage.getItem('authToken').then(token => {
    if (token) {
      return token;
    } else {
      const newToken = 'qwertyuiolkjhgfdsdfghjk';
      return AsyncStorage.setItem('authToken', newToken).then(() => newToken);
    }
  });
