import { StyleSheet, Text, View } from 'react-native';
import React, { useContext } from 'react';
import { Context as AuthContext } from '../context/AuthContext';
import { NavigationEvents } from 'react-navigation';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const SigninScreen = () => {
  const { state, signin, clearErrorMessage } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <NavigationEvents onWillFocus={clearErrorMessage} />
      <AuthForm
        headerText='Sign In to your Account'
        errorMessage={state.errorMessage}
        submitButtonText='Log In'
        onSubmit={({ email, password }) => signin({ email, password })}
      />
      <NavLink text='Dont have an account? Sign Up now' routeName='Signup' />
    </View>
  );
};

SigninScreen.navigationOptions = () => {
  return {
    headerShown: null,
  };
};

export default SigninScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 225,
  },
});
