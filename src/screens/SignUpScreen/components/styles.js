import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  wrapper: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  scroll: {
    width: '100%',
    alignItems: 'center',
    paddingTop: 15,
    paddingBottom: 60,
  },
  content: {
    width: '100%',
    maxWidth: 310,
    paddingHorizontal: 15,
  },
  signUpText: {
    flexDirection: 'row',
    marginTop: 40,
    justifyContent: 'center',
  },
  submitButton: {
    marginTop: 20,
  },
});
