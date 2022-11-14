import { StyleSheet } from 'react-native';
import { widthPercentageToDP } from '@helpers';
import { colors } from '@utils';

export default StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    width: '75%',
    borderWidth: 2,
    borderRadius: 12,
    paddingHorizontal: widthPercentageToDP('3')
  },
  button: {
    width: '20%',
    borderRadius: 12,
    paddingHorizontal: widthPercentageToDP('2'),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonTitle: {
    color: colors.WHITE,
    fontWeight: '600',
    alignSelf: 'center',
    marginRight: '20%',
  },
  indicator: {
    marginLeft: '35%',
  },
});
