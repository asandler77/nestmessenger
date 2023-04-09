import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { netip } from '../../consts';

export const SignUp = () => {
  const getProfile = async () => {
    const url = `http://${netip}:3000/auth/create`;
    const networkOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userName: 'Anna9',
        password: 'lada',
      }),
    };
    fetch(url, networkOptions).then(res => res.json());
  };
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Messenger</Text>
      <TouchableOpacity onPress={getProfile}>
        <Text>Create user</Text>
      </TouchableOpacity>
    </View>
  );
};
