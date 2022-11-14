import React from 'react';

import { WebView } from 'react-native-webview';

import { PIXABAY_URL } from '@env'

export const AuthorScreen = ({route}) => {
  const { author } = route.params;

  return (
    <WebView
      source={{ uri: `${PIXABAY_URL}/${author}` }}
    />
  )
}
