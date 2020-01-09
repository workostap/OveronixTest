import React from 'react';
import { View, ScrollView } from 'react-native';

import styles from './styles';

const ContentWrapper = ({ children, keyboardShouldPersistTaps }) => (
  <View style={styles.wrapper}>
    <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps={keyboardShouldPersistTaps}>
      <View style={styles.container}>
        {children}
      </View>
    </ScrollView>
  </View>
);

export default React.memo(ContentWrapper);
