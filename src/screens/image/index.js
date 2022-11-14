import React from 'react';
import { Image, ScrollView, View, Share, Linking } from 'react-native';
import { PXButton, PXContainer, PXTextButton, PXTextInfo } from 'src/components';

import { SCREENS } from '@utils';

import { useSelector } from 'react-redux';

import styles from './styles';

export const ImageScreen = ({navigation, route}) => {
  const { index } = route.params;
  const item = useSelector(state => state.images.images[index]);

  const onShare = async () => {
    try {
      const result = await Share.share({
        url: item.largeImageURL,
        message:
          'Send this image to your friends or save in your device',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          console.log('shared with activity type of result.activityType')
        } else {
          console.log('shared')
        }
      } else if (result.action === Share.dismissedAction) {
        console.log('dismissed')
      }
    } catch (error) {
      alert(error.message);
    }
  };
  
  return (
    <PXContainer>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <Image 
          style={styles.image}
          source={{
            uri: item.largeImageURL
          }}
        />
        <View style={styles.contentContainer}>
          <PXTextButton 
            onPress={() => navigation.navigate(SCREENS.AUTHOR, { author: item.user })} 
            title={`Author: ${item.user}`}
          />
          <PXTextInfo label='Tags' info={item.tags} />
          <PXTextInfo label='Resolutions' info={`${item.imageWidth} X ${item.imageHeight}`} />
          <PXTextInfo label='Downloads' info={item.downloads} />
          <PXTextInfo label='Comments' info={item.comments} />
          <PXTextInfo label='Likes' info={item.likes} />
          <PXTextButton
            onPress={() => Linking.openURL(item.pageURL)}
            title='Website'
          />
        </View>
        <PXButton onPress={onShare} title='SEND' />
      </ScrollView>
    </PXContainer>
  )
}
