import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Movies } from './Movies';
import { MovieOverview } from './MovieOverview';
import { MovieModel } from './model';
import { SearchItem } from './SearchItem';

const movies: MovieModel[] = [
  {
    name: 'Predator',
    score: '4',
    url: 'https://upload.wikimedia.org/wikipedia/en/9/95/Predator_Movie.jpg',
  },
  {
    name: 'Rocky',
    score: '2',
    url: 'https://upload.wikimedia.org/wikipedia/en/1/18/Rocky_poster.jpg',
  },
  {
    name: 'Jurassic park',
    score: '1',
    url: 'https://upload.wikimedia.org/wikipedia/en/e/e7/Jurassic_Park_poster.jpg',
  },
  {
    name: 'Total recall',
    score: '3',
    url: 'https://upload.wikimedia.org/wikipedia/en/2/2d/Total_Recall_%281990_film%29_poster.jpg',
  },
];

export const MainScreen = ({ navigation }) => {
  const [selectedMovie, setSelectedMovie] = useState<MovieModel>(movies[0]);
  const [searchItem, setSearchItem] = useState('');

  const onSelectCB = (movie: MovieModel) => {
    setSelectedMovie(movie);
  };

  const onChangeItem = (item: string) => {
    setSearchItem(item);
  };

  const onAddMovie = () => {
    navigation.navigate('AddMovie');
  };

  return (
    <SafeAreaView style={styles.movies}>
      <MovieOverview movie={selectedMovie} />
      <Movies movies={movies} onSelectCB={onSelectCB} />
      <SearchItem value={searchItem} onChange={onChangeItem} />
      <TouchableOpacity style={styles.addButton} onPress={onAddMovie}>
        <Text>Add movie</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  movies: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: 'cornsilk',
  },
  addButton: {
    borderRadius: 16,
    borderWidth: 2,
    margin: 16,
    paddingHorizontal: 8,
    backgroundColor: 'white',
  },
});
