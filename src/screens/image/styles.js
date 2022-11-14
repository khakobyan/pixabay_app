import { StyleSheet } from 'react-native';
import { widthPercentageToDP, heightPercentageToDP } from 'src/helpers';
import { colors } from 'src/utils';

export default StyleSheet.create({
  container: {
    marginTop: 0,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 12,
  },
  contentContainer: {
    marginTop: 20,
  },
  text: {
    lineHeight: 36,
    textTransform: 'capitalize',
  },
  textButton: {
    height: 50,
    justifyContent: 'center',
    alignSelf: 'flex-start',
  },
  textButtonTitle: {
    color: colors.BLUE,

  },
  button: {
    height: 50,
    width: 150,
    marginTop: heightPercentageToDP('4'),
    backgroundColor: colors.GREEN,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  buttonTitle: {
    color: colors.WHITE,
    fontWeight: '700',
    fontSize: 24,
  }
});
