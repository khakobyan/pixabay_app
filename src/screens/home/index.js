import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, TextInput } from 'react-native';

import { PXContainer, PXSearch } from '@components';

export const HomeScreen = () => {
  return (
    <PXContainer>
      <ScrollView 
        showsVerticalScrollIndicator={false}
        // contentContainerStrryle={styles.container}
      >
        <PXSearch />
        {/* <View style={styles.topContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <CloseIcon />
          </TouchableOpacity>
        </View>
        <Text style={{...styles.titleText, color: colors.text}}>{article.text}</Text> */}
        {/* <Text style={{...styles.descText, color: colors.text}}>{article.text}</Text> */}
      </ScrollView>
    </PXContainer>
  )
}
