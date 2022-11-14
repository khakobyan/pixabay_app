import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { colors, SCREENS } from 'src/utils';
import * as screens from 'src/screens';

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
      <Stack.Screen
        name={SCREENS.IMAGE}
        component={screens.ImageScreen}
        options={{
          headerStyle: {
            backgroundColor: colors.GREEN,
          },
          headerTitleAlign: 'center',
          headerTitle: 'Information About Image',
          headerTitleStyle: {
            color: colors.WHITE,
          },
          headerTintColor: colors.WHITE,
        }}
      />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
      
        {/* <Stack.Screen name="ChecklistDetails" component={ChecklistDetails} />
        <Stack.Screen name="ChecklistChangePassword" component={ChangePassword} /> */}
      </Stack.Group>
    </Stack.Navigator>
  );
};
