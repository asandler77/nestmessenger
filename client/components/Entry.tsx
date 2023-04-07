import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useForm } from 'react-hook-form';
import { FormInput } from './common/form/FormInput';
import { Button } from './common/buttons/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';
import UUID from 'pure-uuid';
import { async } from 'rxjs';

export interface EmailSignInObj {
  email: string;
}

export const Entry = () => {
  const { control, handleSubmit } = useForm<EmailSignInObj>();

  const getTokenId = (): Promise<string> =>
    AsyncStorage.getItem('authToken').then(token => {
      if (token) {
        return token;
      } else {
        const newToken = 'qwertyuiolkjhgfdsdfghjk';
        return AsyncStorage.setItem('authToken', newToken).then(() => newToken);
      }
    });

  const getProfile = async () => {
    const url = 'http://192.168.61.249:3000/auth/create';
    const networkOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userName: 'Anna91',
        password: 'lada',
      }),
    };
    fetch(url, networkOptions).then(res => res.json());
  };

  const onHandleSubmit = () => {
    const url = 'http://192.168.61.249:3000/auth/login';
    const networkOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userName: 'Anna91',
        password: 'lada',
      }),
    };
    fetch(url, networkOptions)
      .then(res => res.json())
      .then(data => {
        AsyncStorage.setItem('authToken', data.access_token);
      });
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
      }}>
      <FormInput name="email" control={control} title={'email'} placeholder={'enter email'} />
      <Button btnLabel={'Authenticate'} onPress={handleSubmit(onHandleSubmit)} />
      <TouchableOpacity onPress={getProfile}>
        <Text>Get Profile</Text>
      </TouchableOpacity>
    </View>
  );
};
