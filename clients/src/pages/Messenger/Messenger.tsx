import React from 'react';
import { StyleSheet, View } from 'react-native';
import { FormInput } from '../../components/common/form/FormInput';
import { LABELS } from '../../consts';
import { Button } from '../../components/common/buttons/Button';
import { useForm } from 'react-hook-form';
import { CONSTANT_COLORS } from '../../constants/Colors';

export const Messenger = () => {
  const { control, handleSubmit } = useForm();

  const onHandleSubmit = () => {
    console.log('send message');
  };

  return (
    <View style={styles.container}>
      <FormInput
        name="password"
        control={control}
        title={''}
        customInputStyle={styles.inputContainer}
        customTitleStyle={styles.usernameInputTitle}
        placeholder={'הכניסו סיסמה'}
        // rules={{
        //   required: ` ${SIGN_UP.INPUT_ERROR_TEXT}`,
        // }}
      />
      <Button
        customBtnContainerStyle={{ borderRadius: 38, marginTop: 48 }}
        btnLabel={LABELS.SEND_MESSAGE}
        onPress={handleSubmit(onHandleSubmit)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 48,
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
});
