import React from 'react';
import get from 'lodash/get';

import Input from '../Input';

const FormikInput = ({
  field: { name, value },
  form: { errors, touched, handleChange, handleBlur },
  label,
  labelBg,
  placeholder,
  secureTextEntry,
  toggleSecureText,
  autoCapitalize,
  keyboardType,
                       locator,
}) => (
  <Input
    label={label}
    labelBg={labelBg}
    validationError={get(touched, name) && get(errors, name)}
    isVisibleValidIcon={get(touched, name) && !get(errors, name)}
    secureTextEntry={secureTextEntry}
    toggleSecureText={toggleSecureText}
    name={name}
    value={value}
    onChange={handleChange(name)}
    onBlur={handleBlur(name)}
    onFocus={() => {}}
    placeholder={placeholder}
    autoCapitalize={autoCapitalize}
    keyboardType={keyboardType}
    locator={locator}
  />
);

export default React.memo(FormikInput);
