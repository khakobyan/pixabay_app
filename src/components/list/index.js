import React from 'react';
import { ActivityIndicator, FlatList, Text } from 'react-native';
import { useDimensions } from 'src/providers';
import { PXListItem } from './item';
import styles from './styles';
import { colors } from 'src/utils';

export function PXList({
  data,
  getMore,
  loading
}) {
  const { isLandscape } = useDimensions();

  const renderItem = ({item, index}) => <PXListItem item={item} index={index}/>;
  const renderFooterComponent = () => loading && data.length ? <ActivityIndicator size='large' color={colors.GREEN}/> : null;
  const renderEmptyComponent = () => <Text style={styles.emptyText}>There is no image by search criteria, please try again!</Text>;

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
      keyExtractor={(item, index) => "_" + item.id + index}
      extraData={data}
      onEndReached={getMore}
      onEndReachedThreshold={0.5}
      ListFooterComponent={renderFooterComponent}
      ListEmptyComponent={renderEmptyComponent}
      maxToRenderPerBatch={6}
    /> :
    <FlatList
      contentContainerStyle={styles.container}
      data={data}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
      key={'#'}
      keyExtractor={(item, index) => "#" + item.id + index}
      extraData={data}
      onEndReached={getMore}
      onEndReachedThreshold={0.2}
      ListFooterComponent={renderFooterComponent}
      ListEmptyComponent={renderEmptyComponent}
      maxToRenderPerBatch={6}
    /> 
  )
}
