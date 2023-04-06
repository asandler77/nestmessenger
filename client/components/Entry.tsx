import React from 'react';
import { View } from 'react-native';
import { useForm } from 'react-hook-form';
import { FormInput } from './common/form/FormInput';
import { Button } from './common/buttons/Button';

export interface EmailSignInObj {
  email: string;
}

export const Entry = () => {
  const { control, handleSubmit } = useForm<EmailSignInObj>();

  const onHandleSubmit = () => {
    console.log('onSubmit press');
    const url = 'http://localhost:3000/auth/login';
    const networkOptions = {
      // method: RequestMethod.GET,
      credentials: 'omit' as RequestCredentials_,
    };
    const httpRequest = fetch('http://localhost:3000/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: 'john',
        password: 'changeme',
      }),
    });
    console.log('onSubmit httpRequest', httpRequest);
  };

  // const networkOptions = {
  //   method: httpOptions?.requestMethod ?? RequestMethod.GET,
  //   credentials: 'omit' as RequestCredentials_,
  //   headers,
  //   ...(httpOptions?.bodyParams && { body: JSON.stringify(httpOptions?.bodyParams) }),
  //   signal,
  // };

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
