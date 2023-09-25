import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View } from 'react-native';
import { Downloads } from '../downloads/Downloads';
import { MainScreen } from '../movies/MainScreen';
import Icon from 'react-native-vector-icons/FontAwesome';

const BottomTabNav = createBottomTabNavigator();

export const Main = () => {
  return (
    <View style={{ flex: 1 }}>
      <BottomTabNav.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: '#fffaf0',
            height: 80,
            paddingBottom: 16,
            paddingTop: 16,
          },
          tabBarLabelStyle: {
            fontSize: 14,
            color: '#00bfff',
          },
        }}>
        <BottomTabNav.Screen
          name={'MainScreen'}
          component={MainScreen}
          options={{
            tabBarLabel: 'Home',
          }}
        />
        <BottomTabNav.Screen
          name={'Downloads'}
          component={Downloads}
          options={{
            tabBarLabel: 'Home',
          }}
        />
      </BottomTabNav.Navigator>
    </View>
  );
};
