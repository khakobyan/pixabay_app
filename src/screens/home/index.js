import React, { useState } from 'react';
import { View } from 'react-native';

import { PXContainer, PXSearch, PXList } from '@components';

import { useDispatch, useSelector } from 'react-redux';
import { fetchImages } from '@actions';

export const HomeScreen = () => {
  const [searchInput, setSearchInput] = useState('');

  const dispatch = useDispatch();
  const { images, loading } = useSelector(state => state.images);

  console.log('images', loading)
  return (
    <PXContainer>
      <View>
        <PXSearch 
          value={searchInput}
          onChange={setSearchInput}
          onSearchPress={() => dispatch(fetchImages(searchInput))}
          loading={loading}
        />
        <PXList data={images}/>
      </View>
    </PXContainer>
  )
}
