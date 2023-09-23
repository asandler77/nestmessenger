import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Movies } from './Movies';
import { MovieOverview } from './MovieOverview';
import { MovieModel } from './model';
import { SearchItem } from './SearchItem';

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

  const onChangeItem = (item: string) => {
    console.log('onChangeItem');
    setSearchItem(item);
  };
  return (
    <SafeAreaView style={styles.movies}>
      <MovieOverview movie={selectedMovie} />
      <Movies movies={movies} onSelectCB={onSelectCB} />
      <SearchItem value={searchItem} onChange={onChangeItem} />
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
