import { StyleSheet } from 'react-native';

import { fonts, colors } from '../../styles/theme';

export default StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    display: 'flex',
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  innerWrapper: {
    position: 'relative',
    width: '100%',
  },
  title: {
    marginBottom: -10,
    marginLeft: 20,
    fontSize: 10,
    lineHeight: 12,
    padding: 5,
    color: colors.greyInputBorder,
    zIndex: 2,
    fontFamily: fonts.primary.regular,
    opacity: 0,
  },
  titleError: {
    color: colors.errorInputBorder,
  },
  titleShow: {
    opacity: 1,
  },
  titleFocus: {
    color: colors.greyActiveInputBorder,
  },
  error: {
    fontFamily: fonts.primary.regular,
    fontSize: 10,
    lineHeight: 12,
    color: colors.errorInputBorder,
    marginTop: 4,
  },
  input: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    borderWidth: 1,
    borderRadius: 7,
    borderColor: colors.greyInputBorder,
    height: 40,
    color: colors.black,
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 17,
    width: '100%',
  },
  inputFocus: {
    borderColor: colors.greyActiveInputBorder,
  },
  androidInput: {
    width: '100%',
    color: colors.black,
  },
  androidPlaceholder: {
    color: colors.greyInputPlaceholder,
    fontFamily: fonts.primary.regular,
    fontSize: 14,
    lineHeight: 17,
  },
  iosPlaceholder: {
    color: colors.greyInputPlaceholder,
  },
  inputError: {
    borderColor: colors.errorInputBorder,
  },
  toggleSecureBtn: {
    position: 'absolute',
    right: 2,
    top: 14,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  successIcon: {
    position: 'absolute',
    top: 23,
    right: 10,
  },
});
