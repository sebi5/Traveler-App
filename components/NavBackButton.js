import React from 'react';
import {
  Icon
} from 'react-native-elements';

export default (props) => {
  const { navigation } = props;
  return (
    <Icon
      name="chevron-left"
      type="octicon"
      underlayColor="#0000"
      iconStyle={{marginLeft: 14}}
      onPress={() => navigation.goBack()}
    />
  );
}
