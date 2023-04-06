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
    const url = 'http://nestjs.com';
    const httpRequest = fetch(url);
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
