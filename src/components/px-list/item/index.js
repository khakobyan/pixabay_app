import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useDimensions } from 'src/providers';
import styles from './styles';

export function PXListItem({item}) {
  const { isLandscape } = useDimensions()

  return (
    <TouchableOpacity
      style={{
        ...styles.container,
        width: isLandscape ? '46%' : '100%',
      }}
      // onPress={() => navigation.navigate('Article', { item })}
    >
      <Image 
        source={{
          uri: item.previewURL
        }}
        resizeMode='contain'
        style={styles.image}
      />
      <View style={styles.contentContainer}>
        <Text style={styles.text}>Author: {item.user}</Text>
        <Text style={styles.text}>Type: {item.type}</Text>
      </View>
    </TouchableOpacity>
  )
}
