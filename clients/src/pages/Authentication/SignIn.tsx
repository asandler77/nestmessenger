import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useForm } from 'react-hook-form';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FormInput } from '../../components/common/form/FormInput';
import { Button } from '../../components/common/buttons/Button';
import { netip, SIGN_UP } from '../../consts';
import { CONSTANT_COLORS } from '../../constants/Colors';
import { BaseText } from '../../constants/BaseText';
import { store } from '../../state-mangement/store';
import { setAuthInfo } from '../../state-mangement/slices/authSlice';

export interface EmailSignInObj {
  email: string;
}

export const SignIn = ({ navigation }) => {
  const { control, handleSubmit } = useForm<EmailSignInObj>();
  const dispatch = store.dispatch;

  const onSignUpPress = () => {
    console.log('press on sign up');
    navigation.navigate('SignUp');
  };

  const onHandleSubmit = () => {
    const url = `http://${netip}:3000/auth/login`;
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
        console.log('dispatched');
        dispatch(setAuthInfo());
      });
  };

  return (
    <View style={styles.container}>
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
        customBtnContainerStyle={{ borderRadius: 38, marginTop: 48 }}
        btnLabel={'Authenticate'}
        onPress={handleSubmit(onHandleSubmit)}
      />
      <Button
        customBtnContainerStyle={{ borderRadius: 38, marginTop: 48 }}
        btnLabel={'Sign up'}
        onPress={onSignUpPress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 32,
  },
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
  signUpButton: {
    marginTop: 48,
    marginHorizontal: 32,
    alignItems: 'center',
    backgroundColor: CONSTANT_COLORS.MID_LIGHT_BLUE,
  },
  signUpTitle: {
    fontSize: 32,
    color: CONSTANT_COLORS.ALWAYS_WHITE,
  },
});
