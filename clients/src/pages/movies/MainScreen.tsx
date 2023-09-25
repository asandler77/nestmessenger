import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Movies } from './Movies';
import { MovieOverview } from './MovieOverview';
import { MovieModel } from './model';
import { SearchItem } from './SearchItem';
import { showToast } from '../../components/common/Toasts';
import { useGetAllMoviesQuery } from '../../services/movieServices';

export const MainScreen = ({ navigation }) => {
  const [searchItem, setSearchItem] = useState('');
  const [selectedMovie, setSelectedMovie] = useState<MovieModel | null>(null);
  const { data, isLoading, isError, refetch } = useGetAllMoviesQuery({});

  useEffect(() => {
    refetch();
  }, []);

  useEffect(() => {
    !!data && data.length > 0 && setSelectedMovie(data[0]);
  }, [data]);

  if (isLoading) {
    return (
      <>
        <Text>Loading...</Text>
      </>
    );
  }
  if (isError) {
    showToast('error', 'Some thing went wrong', 'Try again later');
  }

  const onSelectCB = (movie: MovieModel) => {
    setSelectedMovie(movie);
  };

  const onChangeItem = (item: string) => {
    setSearchItem(item);
  };

  const onAddMovie = () => {
    navigation.navigate('AddMovie');
  };
  console.log('selectedMovie==', selectedMovie);

  return (
    <SafeAreaView style={styles.movies}>
      <MovieOverview movie={selectedMovie} />
      <Movies movies={data} onSelectCB={onSelectCB} />
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
