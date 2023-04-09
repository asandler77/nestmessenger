import React, { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Messenger } from '../pages/Messenger/Messenger';
import { AuthNavigator } from './AuthNavigator';
import { selectIsAuthenticated } from '../state-mangement/authSelectors';
import { useAppSelector } from '../state-mangement/storeUtils';

export const RootStack = createNativeStackNavigator();

export const AppNavigator = () => {
  const [isAuthenticatedUser, setIsAuthenticatedUser] = useState(false);
  const isSignedIn = useAppSelector(selectIsAuthenticated);

  useEffect(() => {
    if (isSignedIn) {
      setIsAuthenticatedUser(true);
    }
  }, [isSignedIn]);
  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      {isAuthenticatedUser ? (
        <RootStack.Screen name="Messenger" component={Messenger} />
      ) : (
        <RootStack.Screen name="AuthNavigator" component={AuthNavigator} />
      )}
    </RootStack.Navigator>
  );
};
