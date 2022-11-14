import React from 'react';
import { FlatList } from 'react-native';
import { useDimensions } from 'src/providers';
import { PXListItem } from './item';
import styles from './styles';

export function PXList({data}) {
  const { isLandscape } = useDimensions();

  const renderItem = ({item}) => <PXListItem item={item}/>;

  return (
    isLandscape ? 
      <FlatList
        numColumns={2}
        contentContainerStyle={styles.container}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        data={data}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        key={'_'}
        keyExtractor={item => "_" + item.id}
        extraData={data}
      /> :
      <FlatList
        contentContainerStyle={styles.container}
        data={data}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        key={'#'}
        keyExtractor={item => "#" + item.id}
        extraData={data}
      /> 
  )
}
