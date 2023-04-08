import React from 'react';
import { ActivityIndicator, StyleSheet, Text, TextStyle, TouchableOpacity, ViewStyle } from 'react-native';
import { BaseText } from '../../../constants/BaseText';
import { CONSTANT_COLORS } from '../../../constants/Colors';

interface Props {
  btnLabel: string;
  onPress: () => void;
  customBtnContainerStyle?: ViewStyle;
  customBtnLabelStyle?: TextStyle;
  secondaryBtn?: boolean;
  isLoading?: boolean;
  customLoaderStyle?: ViewStyle;
  errMsg?: string;
}

export const Button = (props: Props) => {
  const { btnLabel, onPress, secondaryBtn, isLoading, errMsg } = props;
  const { customBtnContainerStyle, customBtnLabelStyle, customLoaderStyle } = props;
  return (
    <>
      {errMsg ? <BaseText text={errMsg} customTextStyle={styles.errMsg} /> : null}
      <TouchableOpacity
        style={[secondaryBtn ? styles.secondaryBtnContainer : styles.btnContainer, customBtnContainerStyle]}
        onPress={onPress}>
        {isLoading ? (
          <ActivityIndicator style={[styles.loaderStyle, customLoaderStyle]} color={CONSTANT_COLORS.WHITE} />
        ) : (
          <Text style={[secondaryBtn ? styles.btnLabelSecondary : styles.btnLabel, customBtnLabelStyle]}>
            {btnLabel}
          </Text>
        )}
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    backgroundColor: CONSTANT_COLORS.MID_LIGHT_BLUE,
  },
  btnLabel: {
    color: CONSTANT_COLORS.WHITE,
    textAlign: 'center',
    paddingVertical: 15,
    fontSize: 16,
  },
  secondaryBtnContainer: {
    backgroundColor: CONSTANT_COLORS.WHITE,
  },
  btnLabelSecondary: {
    color: CONSTANT_COLORS.MID_LIGHT_BLUE,
    textAlign: 'center',
    paddingVertical: 15,
    fontSize: 16,
  },
  loaderStyle: {
    paddingVertical: 14,
  },
  errMsg: {
    marginTop: 25,
    textAlign: 'center',
    color: CONSTANT_COLORS.ERROR_TEXT,
  },
});
