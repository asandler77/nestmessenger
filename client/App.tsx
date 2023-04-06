/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { Entry } from './components/Entry';

const App = () => {
  if (__DEV__) {
    import('./config/ReactotronConfig').then(() => console.log('Reactotron Configured'));
  }
  return <Entry />;
};

export default App;
