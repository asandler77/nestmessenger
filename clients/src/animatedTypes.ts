import { Easing } from 'react-native-reanimated';

export const customEasingReanimated = {
  linear: Easing.bezier(0.0, 0.0, 1.0, 1.0),
  easeOutApp: Easing.bezier(0.0, 0.0, 0.58, 1.0),
  quadOutApp: Easing.bezier(0.4, 0.8, 0.74, 1.0),
  cubicInOutApp: Easing.bezier(0.66, 0.0, 0.34, 1.0),
  cubicOutApp: Easing.bezier(0.33, 1.0, 0.68, 1.0),
  expoOutApp: Easing.bezier(0.0, 0.0, 0.0, 1.0),
  efficientOutApp: Easing.bezier(0.2, 0.1, 0.0, 1.0),
  supportiveInOutApp: Easing.bezier(0.45, 0.05, 0.2, 0.95),
};
