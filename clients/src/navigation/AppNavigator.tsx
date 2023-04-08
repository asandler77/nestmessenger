import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Messenger} from '../pages/Messenger/Messenger';
import {AuthNavigator} from './AuthNavigator';

export const RootStack = createNativeStackNavigator();

export const AppNavigator = () => {
  const isSignedIn = false;
  return (
    <RootStack.Navigator>
      {isSignedIn ? (
        <RootStack.Screen name="Messenger" component={Messenger} />
      ) : (
        <RootStack.Screen name="SignIn" component={AuthNavigator} />
      )}
    </RootStack.Navigator>
  );
};
