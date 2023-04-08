import React from 'react';
import {Text, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SignIn} from '../pages/Authentication/SignIn';
import {SignUp} from '../pages/Authentication/SignUp';

const AuthNav = createNativeStackNavigator();

export const AuthNavigator = () => {
  return (
    <AuthNav.Navigator>
      <AuthNav.Screen name={'SignIn'} component={SignIn} />
      <AuthNav.Screen name={'SignUp'} component={SignUp} />
    </AuthNav.Navigator>
  );
};
