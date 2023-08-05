import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { createUser } from '../../services/authService';

export const SignUp = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Messenger</Text>
      <TouchableOpacity onPress={createUser} style={{ backgroundColor: 'grey' }}>
        <Text>Create user</Text>
      </TouchableOpacity>
    </View>
  );
};
