import { createSwitchNavigator } from 'react-navigation';

import { colors } from '../styles/theme';
import AuthNavigator from './AuthNavigator';

export default createSwitchNavigator({
  Auth: AuthNavigator,
}, {
  cardStyle: { backgroundColor: colors.profileBodyBg },
  initialRouteName: 'Auth',
});
