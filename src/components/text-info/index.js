import React from 'react';
import { Text } from 'react-native';

import styles from './styles';

export const PXTextInfo = ({
  label,
  info,
}) => {
  return (
    <Text style={styles.text}>{label}: <Text style={styles.info}>{info}</Text></Text>
  );
}
