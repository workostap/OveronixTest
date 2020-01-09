import React, { PureComponent } from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  ActivityIndicator,
} from 'react-native';

import { colors } from '../../styles/theme';

import styles from './styles';
import addLocator from '../../services/addLocators';

class Button extends PureComponent {

  render() {
    const { title, onPress, style, textStyle, isFilled, inverse, disabled, isLoading, locator } = this.props;

    return (
      <TouchableOpacity
        {...addLocator(locator)}
        onPress={onPress}
        style={[
          styles.button,
          inverse && styles.inverse,
          {
            backgroundColor: isFilled ? colors.lightGreen : colors.transparent,
            borderColor: isFilled ? colors.transparent : colors.lightGreen,
            opacity: disabled ? 0.4 : 1,
          },
          style && style,
        ]}
        disabled={disabled || isLoading}
      >
          {!isLoading && <Text
            style={[
              styles.text,
              { color: isFilled ? colors.white : colors.lightGreen },
              inverse && styles.inverseText,
              textStyle && textStyle,
            ]}
          >
            {title}
          </Text>}

          {isLoading && <View style={styles.loaderWrapper}>
            <ActivityIndicator size="large" color={isFilled ? colors.white : colors.lightGreen} />
          </View>}

      </TouchableOpacity>
    );
  }
}

export default Button;
