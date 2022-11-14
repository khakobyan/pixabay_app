import React, { useEffect } from 'react';

import { StatusBar } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Provider } from 'react-redux';
import { store } from '@store';

import { RootNavigation } from '@navigation';

import { DimensionsProvider } from 'src/providers';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <SafeAreaProvider>
      <DimensionsProvider>
        <StatusBar translucent backgroundColor='transparent' barStyle="dark-content" />
        <RootNavigation />
      </DimensionsProvider>
    </SafeAreaProvider>
  );
};

const AppStoreProvider = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default AppStoreProvider;
