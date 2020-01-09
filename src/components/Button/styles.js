import { StyleSheet } from 'react-native';

import { fonts, colors } from '../../styles/theme';

export default StyleSheet.create({
  button: {
    borderWidth: 2,
    borderRadius: 5,
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 14,
    lineHeight: 17,
    flexShrink: 0,
    flexGrow: 1,
  },
  inverse: {
    backgroundColor: colors.transparent,
    borderColor: colors.lightGreen,
    borderWidth: 2,
  },
  text: {
    fontSize: 14,
    lineHeight: 42,
    textAlign: 'center',
    fontFamily: fonts.primary.regular,
  },
  inverseText: {
    color: colors.lightGreen,
  },
  loaderWrapper: {
    paddingVertical: 3,
  },
});
