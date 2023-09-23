import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {MovieModel} from './model';

interface Props {
  movie: MovieModel;
  onSelectCB: (movie: MovieModel) => void;
}

export const Movie = (props: Props) => {
  const {movie, onSelectCB} = props;
  const onPress = () => {
    onSelectCB(movie);
  };
  return (
    <View style={styles.movie}>
      <TouchableOpacity onPress={onPress}>
        <Image style={styles.image} source={{uri: movie.url}} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  movie: {
    borderWidth: 1,
    height: 180,
    width: 150,
    alignItems: 'center',
    marginHorizontal: 4,
    // borderRadius: 12,
    backgroundColor: 'azure',
  },
  title: {
    fontSize: 24,
  },
  image: {
    height: 180,
    width: 150,
    borderWidth: 1,
  },
});
