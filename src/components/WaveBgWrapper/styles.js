import { StyleSheet } from 'react-native';

import { colors } from '../../styles/theme';


const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    backgroundColor: colors.selectedAccountBg,
  },
  waveWrapper: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: 385,
  },
});

export default styles;
