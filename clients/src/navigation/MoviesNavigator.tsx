import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MainScreen } from '../tabs/movies/MainScreen';
import { AddMovie } from '../tabs/movies/AddMovie';

const MovieNavigator = createNativeStackNavigator();

export const MoviesNavigator = () => {
  return (
    <MovieNavigator.Navigator>
      <MovieNavigator.Screen name={'MainScreen'} component={MainScreen} />
      <MovieNavigator.Screen name={'AddMovie'} component={AddMovie} />
    </MovieNavigator.Navigator>
  );
};
