import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Text } from '@rneui/themed';
import Spacer from './Spacer';
import { withNavigation } from 'react-navigation';

const NavLink = ({ navigation, text, routeName }) => {
  return (
    <>
      <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
        <Spacer>
          <Text style={styles.touchableText}>{text}</Text>
        </Spacer>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  touchableText: {
    color: 'blue',
    marginTop: 10,
    fontSize: 18,
  },
});

export default withNavigation(NavLink);
