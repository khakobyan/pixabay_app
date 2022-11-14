import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './stack-navigator';

export const RootNavigation = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}
