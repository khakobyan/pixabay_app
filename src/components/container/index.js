import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';

export const PXContainer = ({children}) => {
  return (
    <SafeAreaView
      style={styles.container}
      edges={['top', 'bottom']}
    >
      {children}
    </SafeAreaView>
  );
}
