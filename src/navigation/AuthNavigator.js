import { createStackNavigator } from 'react-navigation-stack';

import SignInScreen from '../screens/SignInScreen/components/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen/components/SignUpScreen';

import I18n from '../i18n';

import { colors } from '../styles/theme';

export default createStackNavigator({
  SignIn: {
    screen: SignInScreen,
    navigationOptions: {
      title: I18n.t('SIGN_UP_SCREEN.SCREEN_TITLE'),
    },
  },
  TestComplete: {
    screen: SignUpScreen,
    navigationOptions: {
      title: I18n.t('SIGN_UP_SCREEN.SCREEN_TITLE'),
    },
  },
}, {
  initialRouteName: 'SignIn',
  defaultNavigationOptions: {
    headerBackTitle: null,
    headerTintColor: colors.black,
  },
});
