import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SCREENS } from '@utils';
import * as screens from '@screens';

const Stack = createNativeStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={SCREENS.HOME}
    >
      <Stack.Screen
        name={SCREENS.HOME}
        component={screens.HomeScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
