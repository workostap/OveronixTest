import React, { useState, useMemo } from 'react';

import { TextInput, View, Text, TouchableOpacity } from 'react-native';
import addLocator from '../../services/addLocators';
import styles from './styles';

const Input = ({
  label,
  labelBg,
  validationError,
  secureTextEntry,
  toggleSecureText,
  name,
  value,
  onChange,
  onFocus,
  onBlur,
  placeholder,
  isShowSuccessValidationStatus,
  isVisibleValidIcon,
  autoCapitalize,
  keyboardType,
                 locator,
}) => {
  const [isFocused, setFocused] = useState(false);
  const [isSecureTextShow, setSecureTextShow] = useState(false);

  const onInputFocus = (event) => {
    setFocused(!isFocused);
    onFocus(event);
  };

  const onInputBlur = (event) => {
    setFocused(!isFocused);
    onBlur(event);
  };

  const onToggleSecureChange = () => {
    setSecureTextShow(!isSecureTextShow);
  };

  const getSecureTextEntry = () => {
    if (secureTextEntry) {
      return toggleSecureText ? !isSecureTextShow : true;
    }
    return false;
  };

  const isSecureTextEntry = useMemo(
    () => getSecureTextEntry(),
    [secureTextEntry, toggleSecureText, isSecureTextShow],
  );

  return (
    <View style={styles.container}>
        { label && <Text
          style={[
            styles.title,
            { backgroundColor: labelBg },
            validationError && styles.titleError,
            isFocused && !validationError ? styles.titleFocus : null,
            (isFocused || (value && value.length)) && styles.titleShow,
          ]}
        >
          {label}
        </Text>}

      <TextInput
        {...addLocator(locator)}
        name={name}
        value={value}
        placeholder={placeholder}
        style={[
          styles.input,
          validationError && styles.inputError,
          isFocused && !validationError ? styles.inputFocus : null,
        ]}
        onChangeText={onChange}
        secureTextEntry={isSecureTextEntry}
        onBlur={onInputBlur}
        onFocus={onInputFocus}
        autoCapitalize={autoCapitalize}
        keyboardType={keyboardType}
      />

        {(isShowSuccessValidationStatus && isVisibleValidIcon && !secureTextEntry) && <View style={styles.successIcon}>
          <Text>+</Text>
        </View>}


        {validationError &&  <Text style={styles.error}>
          {validationError}
        </Text>}


        {(toggleSecureText && secureTextEntry) && <TouchableOpacity style={styles.toggleSecureBtn} onPress={onToggleSecureChange}>
          <Text>{isSecureTextShow ? '-' : '+'}</Text>
        </TouchableOpacity>}
    </View>
  );
};

export default React.memo(Input);
