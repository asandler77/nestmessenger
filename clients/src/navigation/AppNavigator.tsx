import React from 'react';
import { Messenger } from '../components/Messenger';
import { SignIn } from '../components/SignIn';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export const RootStack = createNativeStackNavigator();

export const AppNavigator = () => {
  const isSignedIn = false;
  return (
    <RootStack.Navigator>
      {isSignedIn ? (
        <RootStack.Screen name="Messenger" component={Messenger} />
      ) : (
        <RootStack.Screen name="SignIn" component={SignIn} />
      )}
    </RootStack.Navigator>
  );
};
