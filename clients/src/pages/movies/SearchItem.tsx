import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

export const SearchItem = ({ value, onChange }: { value: string; onChange: (d: string) => void }) => {
  return (
    <View>
      <TextInput value={value} style={styles.input} placeholder={'Enter item to search ...'} onChangeText={onChange} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderRadius: 8,
    borderWidth: 2,
    margin: 16,
    lineHeight: 32,
    fontSize: 28,
    paddingHorizontal: 8
  },
});
