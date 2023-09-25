import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Movies } from './Movies';
import { MovieOverview } from './MovieOverview';
import { MovieModel } from './model';
import { SearchItem } from './SearchItem';
import { useGetAllMoviesQuery } from '../../services/movieServices1';
import { showToast } from '../../components/common/Toasts';

export const MainScreen = ({ navigation }) => {
  const [searchItem, setSearchItem] = useState('');
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState<MovieModel>(movies[0]);
  const { data, isLoading, isError, refetch } = useGetAllMoviesQuery({});

  useEffect(() => {
    showAllMovies();
  }, []);

  const showAllMovies = () => {
    refetch()
      .then(() => {
        if (isLoading) {
          return (
            <>
              <Text>Loading...</Text>
            </>
          );
        } else if (isError) {
          showToast('error', 'Some thing went wrong', 'Try again later');
        } else {
          setMovies(data);
          showToast('success', 'The action executed successfully', 'All movies retrieved');
        }
      })
      .catch((err: any) => {
        showToast('error', 'Some thing went wrong', `${err}`);
      });
  };

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
