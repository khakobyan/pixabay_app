import React, { useState } from 'react';
import { ActivityIndicator, Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import { Search } from '@assets';
import { colors } from '@utils';
import { useDimensions } from 'src/providers';

export const PXSearch = ({
  value,
  onChange,
  onSearchPress,
  loading
}) => {
  const [isFocused, setIsFocused] = useState(false)

  const { isLandscape } = useDimensions();

  return (
    <View style={styles.container}>
      <TextInput 
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        style={{...styles.input, borderColor: isFocused ? colors.GREEN : colors.LIGHT_GREY}}
        placeholderTextColor={colors.LIGHT_GREY}
        placeholder='Image name'
        value={value}
        onChangeText={onChange}
      />
      <TouchableOpacity 
        style={{
          ...styles.button,
          justifyContent: isLandscape ? 'space-between' : 'center',
          backgroundColor: !value.length ? colors.LIGHT_GREY : colors.GREEN
        }}
        onPress={onSearchPress}
        disabled={!value.length}
      >
        { loading ? <ActivityIndicator size='large' color={colors.WHITE} style={isLandscape && styles.indicator}/> :
          <>
            <Search width={20} height={20} color={colors.WHITE} />
            {isLandscape && <Text style={styles.buttonTitle}>Search</Text>}
          </>
        }
      </TouchableOpacity>
    </View>
  );
}
