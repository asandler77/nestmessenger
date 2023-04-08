import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useForm} from 'react-hook-form';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {FormInput} from '../../components/common/form/FormInput';
import {Button} from '../../components/common/buttons/Button';
import {SIGN_UP} from '../../consts';
import {CONSTANT_COLORS} from '../../constants/Colors';
import {BaseText} from '../../constants/BaseText';

export interface EmailSignInObj {
  email: string;
}

export const SignIn = () => {
  const {control, handleSubmit} = useForm<EmailSignInObj>();

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
    const url = 'http://192.168.214.249:3000/auth/create';
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
    <>
      <BaseText text={SIGN_UP.TITLE} customTextStyle={styles.title} />

      <FormInput
        name="email"
        control={control}
        title={SIGN_UP.USERNAME_TITLE}
        customInputStyle={styles.inputContainer}
        placeholder={SIGN_UP.USERNAME_PLACEHOLDER}
        customTitleStyle={styles.usernameInputTitle}
        rules={{
          required: `${SIGN_UP.USERNAME_TITLE} ${SIGN_UP.INPUT_ERROR_TEXT}`,
        }}
      />

      <FormInput
        name="password"
        control={control}
        title={SIGN_UP.PASSWORD_TITLE}
        customInputStyle={styles.inputContainer}
        customTitleStyle={styles.usernameInputTitle}
        placeholder={'הכניסו סיסמה'}
        rules={{
          required: `${SIGN_UP.USERNAME_TITLE} ${SIGN_UP.INPUT_ERROR_TEXT}`,
        }}
      />

      <Button
        btnLabel={'Authenticate'}
        onPress={handleSubmit(onHandleSubmit)}
      />
      <TouchableOpacity onPress={getProfile}>
        <Text>Create user</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    marginBottom: 20,
    fontSize: 24,
  },
  inputContainer: {
    fontSize: 20,
    borderRadius: 3,
    backgroundColor: CONSTANT_COLORS.ALWAYS_WHITE,
  },
  btnContainer: {
    marginTop: 32,
    marginBottom: 40,
  },
  usernameInputTitle: {
    fontSize: 16,
    marginTop: 22,
  },
});
