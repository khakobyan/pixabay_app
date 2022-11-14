import React, { useState } from 'react';
import { View } from 'react-native';

import { PXContainer, PXSearch, PXList } from 'src/components';

import { useDispatch, useSelector } from 'react-redux';
import { fetchImages } from 'src/actions';

export const HomeScreen = () => {
  const [searchInput, setSearchInput] = useState('');
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const { images, loading } = useSelector(state => state.images);

  const getMoreData = () => {
    if (page <= 26) {
      dispatch(fetchImages(searchInput, page + 1));
      setPage(page + 1);
    }
  };

  return (
    <PXContainer>
      <View>
        <PXSearch 
          value={searchInput}
          onChange={setSearchInput}
          onSearchPress={() => dispatch(fetchImages(searchInput))}
          loading={loading}
        />
        <PXList 
          data={images}
          getMore={getMoreData}
          loading={loading}
        />
      </View>
    </PXContainer>
  )
}
