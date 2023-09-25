import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { addMovie } from '../../services/movieServices';
import { SearchItem } from './SearchItem';
import { MovieModel } from './model';
import { useDeleteAllMoviesMutation } from '../../services/movieServices1';
import { showToast } from '../../components/common/Toasts';

export const AddMovie = ({ navigation }) => {
  const [name, setName] = useState('');
  const [score, setScore] = useState('');
  const [url, setUrl] = useState('');
  const [deleteAllMovies, { isLoading, isError }] = useDeleteAllMoviesMutation();

  const onDeleteMovie = () => {
    deleteAllMovies({})
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
          showToast('success', 'The action executed successfully', 'All movies deleted');
        }
      })
      .catch(err => {
        showToast('error', 'Some thing went wrong', `${err}`);
      });
  };

  const onChangeName = (value: string) => {
    setName(value);
  };

  const onChangeScore = (value: string) => {
    setScore(value);
  };

  const onChangeUrl = (value: string) => {
    setUrl(value);
  };

  const onAddMovie = () => {
    const movie: MovieModel = {
      url,
      name,
      score,
    };
    addMovie(movie);
  };

  return (
    <View style={styles.container}>
      <View>
        <Text>Add name</Text>
        <SearchItem value={name} onChange={onChangeName} />
        <Text>Add score</Text>
        <SearchItem value={score} onChange={onChangeScore} />
        <Text>Add image url</Text>
        <SearchItem value={url} onChange={onChangeUrl} />
        <TouchableOpacity style={styles.addButton} onPress={onAddMovie}>
          <Text>Add movie</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.delete} onPress={onDeleteMovie}>
        <Text>Delete all</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  addButton: {
    borderRadius: 16,
    borderWidth: 2,
    margin: 16,
    paddingHorizontal: 8,
    backgroundColor: 'white',
  },
  delete: {
    borderRadius: 16,
    borderWidth: 2,
    margin: 16,
    paddingHorizontal: 8,
    backgroundColor: 'red',
    minHeight: 32,
    minWidth: 64,
    marginBottom: 36,
  },
});
