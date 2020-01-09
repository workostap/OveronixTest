import { StyleSheet } from 'react-native';

import { fonts, colors } from './theme';

export default StyleSheet.create({
  headerTitle: {
    width: '100%',
    marginTop: 45,
    marginBottom: 30,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 24,
    textAlign: 'center',
    color: colors.lightGreen,
    fontFamily: fonts.primary.regular,
  },
  text: {
    fontFamily: fonts.primary.regular,
    fontSize: 16,
    lineHeight: 19,
    color: colors.defaultText,
  },
  smallText: {
    fontSize: 12,
    lineHeight: 14,
  },
  activeText: {
    color: colors.lightGreen,
  },
});
