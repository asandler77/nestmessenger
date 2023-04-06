import React from 'react';
import { View } from 'react-native';
import { useForm } from 'react-hook-form';
import { FormInput } from './common/form/FormInput';
import { Button } from './common/buttons/Button';
import { RequestMethod } from '@nestjs/common';

export interface EmailSignInObj {
  email: string;
}

export const Entry = () => {
  const { control, handleSubmit } = useForm<EmailSignInObj>();

  const onHandleSubmit = () => {
    console.log('onSubmit press');
    const url = 'http://192.168.61.249:3000/auth/login';
    const networkOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: 'john',
        password: 'changeme',
      }),
    };
    const httpRequest = fetch(url, networkOptions);
    console.log('onSubmit httpRequest', httpRequest);
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
      <Button btnLabel={'Submit'} onPress={handleSubmit(onHandleSubmit)} />
    </View>
  );
};
