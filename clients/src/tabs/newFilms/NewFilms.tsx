import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const NewFilms = () => {
  return (
    <View style={styles.container}>
      <Text>NewFilms</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
