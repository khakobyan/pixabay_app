import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View, Share } from 'react-native';

import { PXContainer } from 'src/components';

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
  
  console.log('current', item);
  return (
    <PXContainer>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <Image 
          source={{
            uri: item.largeImageURL
          }}
          style={styles.image}
        />
        <View style={styles.contentContainer}>
          <TouchableOpacity 
            style={styles.textButton}
            onPress={() => console.log('1111')}
          >
            <Text style={styles.textButtonTitle}>Author: {item.user}</Text>
          </TouchableOpacity>
          <Text style={styles.text}>Tags: <Text style={{fontWeight: '600'}}>{item.tags}</Text></Text>
          <Text style={styles.text}>Resolutions: <Text style={{fontWeight: '600'}}>{item.imageWidth} X {item.imageHeight}</Text></Text>
          <Text style={styles.text}>Downloads: <Text style={{fontWeight: '600'}}>{item.downloads}</Text></Text>
          <Text style={styles.text}>Comments: <Text style={{fontWeight: '600'}}>{item.comments}</Text></Text>
          <Text style={styles.text}>Likes: <Text style={{fontWeight: '600'}}>{item.likes}</Text></Text>
          <TouchableOpacity
            style={styles.textButton}
            onPress={() => console.log('1111')}
          >
            <Text style={styles.textButtonTitle}>Website</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity 
          style={styles.button}
          onPress={onShare}
        >
          <Text style={styles.buttonTitle}>
            SEND
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </PXContainer>
  )
}
