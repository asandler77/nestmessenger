import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SignIn } from '../pages/authentication/SignIn';
import { SignUp } from '../pages/authentication/SignUp';

const AuthNav = createNativeStackNavigator();

export const AuthNavigator = () => {
  return (
    <AuthNav.Navigator>
      <AuthNav.Screen name={'SignIn'} component={SignIn} />
      <AuthNav.Screen name={'SignUp'} component={SignUp} />
    </AuthNav.Navigator>
  );
};
