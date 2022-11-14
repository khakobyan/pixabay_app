import React, { useEffect, useState } from 'react';
import { Text, TextInput, TouchableOpacity, View, Dimensions } from 'react-native';
import styles from './styles';
import { Search } from '@assets';
import { colors } from '@utils';

export const PXSearch = ({
  value,
  onChange,
  onSearch,
}) => {
  const [isLandscape, setIsLandscape] = useState(Dimensions.get('window').width > Dimensions.get('window').height ? true : false)
  
  const handleDimensionsChange = () => Dimensions.get('window').width > Dimensions.get('window').height ? setIsLandscape(true) : setIsLandscape(false);

  useEffect(() => {
    Dimensions.addEventListener('change', handleDimensionsChange);

    return () => {
      Dimensions.removeListener('change', handleDimensionsChange);
    }
  }, [])
  
  return (
    <View style={styles.container}>
      <TextInput 
        style={styles.input}
        placeholderTextColor={colors.LIGHT_GREY}
        placeholder='Image name'
        value={value}
        onChangeText={onChange}
      />
      <TouchableOpacity 
        style={{...styles.button, justifyContent: isLandscape ? 'space-between' : 'center'}}
        onPress={onSearch}
      >
        <Search width={20} height={20} color={colors.WHITE} />
        {isLandscape && <Text style={styles.buttonTitle}>Search</Text>}
      </TouchableOpacity>
    </View>
  );
}
