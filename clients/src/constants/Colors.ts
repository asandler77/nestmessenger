import { DefaultTheme, DarkTheme } from '@react-navigation/native';

export const CONSTANT_COLORS = {
  BG_DEFAULT_TEMP: '#dad',
  LIGHT_GREY: '#F5F6F8',
  LIGHT_BLUE: '#00A3DA',
  BLUE: '#0274BB',
  LIGHT_GREEN: '#90ee90',
  LIGHT_ORANGE: '#fed8b1',
  WHITE: '#FFFFFF',
  GRAY: '#E3E5EC',
  BLACK: '#141622',
  // Formal Colors:
  MID_LIGHT_BLUE: '#0074bb',
  INPUT_GREY: '#686E74',
  GOld: '#ffd700',
  ERROR_TEXT: 'red',
  RED: '#FF4349',
  DEEP_BLUE: '#031D32',
  ALWAYS_WHITE: 'white',
  ALWAYS_BLACK: 'black',
  TRANSPARENT: 'transparent',
  TITLE_GREY: '#F2F2F2',
  INPUT_BG_GREY: '#D8D8D8',
  SELECTED_BLUE: '#E6F5FB',
};

export const LIGHT_COLORS = {
  WHITE: 'white',
};

export const DARK_COLORS: typeof LIGHT_COLORS = {
  WHITE: 'red',
};

export const appTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
  },
  appColors: {
    ...LIGHT_COLORS,
  },
};

export const appDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: 'transparent',
  },
  appColors: {
    ...DARK_COLORS,
  },
};

export const HEADER_GRADIENT_COLORS = ['#031D32', '#031D32', '#031D32'];

export const BASE_GRADIENT = ['#000000', '#13134d', '#13134d'];
