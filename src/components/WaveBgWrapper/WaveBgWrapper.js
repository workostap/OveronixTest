import React from 'react';
import { View } from 'react-native';

import WaveSvg from '../../../assets/images/green-wave.svg';

import styles from './styles';

const WaveBgWrapper = ({ children, additionalStyles }) => (
  <View style={{ ...styles.container, ...additionalStyles }}>
    <View style={styles.waveWrapper}>
      <WaveSvg width="100%" height="100%" preserveAspectRatio="none" />
    </View>
    {children}
  </View>
);

export default WaveBgWrapper;
