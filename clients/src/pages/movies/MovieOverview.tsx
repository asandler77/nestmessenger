import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { MovieModel } from './model';

const height = Dimensions.get('window').height * 0.7;

interface Props {
  movie: MovieModel;
}
export const MovieOverview = (prop: Props) => {
  const { movie } = prop;
  return (
    <View style={styles.container}>
      <Text style={{ marginTop: 20, fontSize: 30 }}>{movie?.name}</Text>
      <Text>{movie?.score}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    height: height,
  },
});
