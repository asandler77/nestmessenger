import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Movies } from './Movies';
import { MovieOverview } from './MovieOverview';
import { MovieModel } from './model';
import { SearchItem } from './SearchItem';
import { addMovie, deleteAll } from '../../services/movieServices';

const movies: MovieModel[] = [
  {
    id: '1',
    name: 'Predator',
    score: 4,
    url: 'https://upload.wikimedia.org/wikipedia/en/9/95/Predator_Movie.jpg',
  },
  {
    id: '2',
    name: 'Rocky',
    score: 2,
    url: 'https://upload.wikimedia.org/wikipedia/en/1/18/Rocky_poster.jpg',
  },
  {
    id: '3',
    name: 'Jurassic park',
    score: 1,
    url: 'https://upload.wikimedia.org/wikipedia/en/e/e7/Jurassic_Park_poster.jpg',
  },
  {
    id: '4',
    name: 'Total recall',
    score: 3,
    url: 'https://upload.wikimedia.org/wikipedia/en/2/2d/Total_Recall_%281990_film%29_poster.jpg',
  },
];

export const MainScreen = () => {
  const [selectedMovie, setSelectedMovie] = useState<MovieModel>(movies[0]);
  const [searchItem, setSearchItem] = useState('');

  const onSelectCB = (movie: MovieModel) => {
    setSelectedMovie(movie);
  };

  const onAddMovie = () => {
    addMovie();
  };
  const onChangeItem = (item: string) => {
    console.log('onChangeItem');
    setSearchItem(item);
  };

  const onDeleteMovie = () => {
    deleteAll();
  };
  return (
    <SafeAreaView style={styles.movies}>
      <MovieOverview movie={selectedMovie} />
      <Movies movies={movies} onSelectCB={onSelectCB} />
      <SearchItem value={searchItem} onChange={onChangeItem} />
      <TouchableOpacity
        style={{
          borderRadius: 16,
          borderWidth: 2,
          margin: 16,
          paddingHorizontal: 8,
          backgroundColor: 'white',
        }}
        onPress={onAddMovie}>
        <Text>Add movie</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          borderRadius: 16,
          borderWidth: 2,
          margin: 16,
          paddingHorizontal: 8,
          backgroundColor: 'white',
        }}
        onPress={onDeleteMovie}>
        <Text>Delete all</Text>
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
});
