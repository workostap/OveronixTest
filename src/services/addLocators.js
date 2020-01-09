import {Platform} from "react-native";

export default (id) => {
  if (Platform.OS === 'ios') {
    return { testID: id };
  }
  return { accessibilityLabel: id };
};
