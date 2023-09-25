import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const Downloads = () => {
  return (
    <View style={styles.container}>
      <Text>Downloads</Text>
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
