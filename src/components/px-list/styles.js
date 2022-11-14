import { StyleSheet } from 'react-native';
import { heightPercentageToDP } from '@helpers';

export default StyleSheet.create({
  container: {
    paddingTop: heightPercentageToDP('2'),
    paddingBottom: heightPercentageToDP('10'), 
  },
});
