import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Platform } from 'react-native';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';

import Input from '../../../components/formik/Input';
import ContentWrapper from '../../../components/ContentWrapper';
import Button from '../../../components/Button';
import I18n from '../../../i18n';
import commonStyles from '../../../styles';
import addLocator from '../../../services/addLocators';
import { colors } from '../../../styles/theme';

import styles from './styles';

const SigninSchema = Yup.object().shape({
  login: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required'),
});

const SignInScreen = ({ signIn, storage, navigation }) => {
  const [isFailed, setFailed] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const handleSubmit = async (variables) => {
    try {
      setLoading(true);
      const { data: { public: { signIn: { token } } } } = await signIn({ variables });
      storage.set('token', token);
      setFailed(false);
      console.log(storage.get('token'));
      setLoading(false);
      navigation.navigate('App');
    } catch (e) {
      setLoading(false);
      setFailed(true);
      console.log('error: ', e);
    }
  };

  return (
    <View style={{flex: 1}}>
      <ContentWrapper>
        <Text style={commonStyles.headerTitle}>
          {I18n.t('SIGN_IN_SCREEN.TITLE')}
        </Text>
        <Formik
          validateOnChange={false}
          validateOnBlur
          initialValues={{
            login: '',
            password: '',
          }}
          validationSchema={SigninSchema}
          onSubmit={handleSubmit}
          render={
            ({ handleSubmit: formikHandleSubmit }) => (
              <>
                <Field
                  component={Input}
                  name="login"
                  placeholder={I18n.t('SIGN_IN_SCREEN.LOGIN_PLACEHOLDER')}
                  label={I18n.t('SIGN_IN_SCREEN.LOGIN')}
                  autoCapitalize="none"
                  labelBg={colors.selectedAccountBg}
                  locator={'loginId'}
                />
                <Field
                  component={Input}
                  name="password"
                  placeholder={I18n.t('SIGN_IN_SCREEN.PASSWORD')}
                  label={I18n.t('SIGN_IN_SCREEN.PASSWORD')}
                  secureTextEntry
                  toggleSecureText
                  labelBg={colors.selectedAccountBg}
                  locator={'passwordId'}
                />
                <Text
                  style={[
                    commonStyles.text,
                    commonStyles.smallText,
                    styles.forgotPassword,
                  ]}
                >
                  {I18n.t('SIGN_IN_SCREEN.FORGOT_PASSWORD')}
                </Text>
                { isFailed && <Text>{I18n.t('SIGN_IN_SCREEN.WRONG_PASSWORD')}</Text> }
                <Button
                  locator={'buttonId'}
                  title={I18n.t('SIGN_IN_SCREEN.SUBMIT_BUTTON').toUpperCase()}
                  onPress={() => navigation.navigate('TestComplete')}
                  isLoading={isLoading}
                />
              </>
            )
          }
        />
        <View style={styles.signUpText}>
          <Text style={commonStyles.text}>
            {I18n.t('SIGN_IN_SCREEN.WITHOUT_ACCOUNT')}
          </Text>
          <TouchableOpacity {...addLocator('signUpId')} onPress={() => navigation.navigate('TestComplete')}>
            <Text
              style={[
                commonStyles.text,
                commonStyles.activeText,
              ]}
            >
              {` ${I18n.t('SIGN_IN_SCREEN.SIGN_UP_LINK')}`}
            </Text>
          </TouchableOpacity>
        </View>
      </ContentWrapper>
    </View>
  );
};

export default SignInScreen;
