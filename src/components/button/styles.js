import { StyleSheet } from 'react-native';
import { heightPercentageToDP } from '@helpers';
import { colors } from '@utils';

export default StyleSheet.create({
  button: {
    height: 50,
    width: 150,
    marginTop: heightPercentageToDP('4'),
    marginBottom: heightPercentageToDP('2'),
    backgroundColor: colors.GREEN,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  title: {
    color: colors.WHITE,
    fontWeight: '700',
    fontSize: 24,
  },
});
