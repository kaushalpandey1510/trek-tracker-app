import '../_mockLocation';
import React, { useContext } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { withNavigationFocus } from 'react-navigation';
import { Text } from '@rneui/themed';
import Map from '../components/Map';
import { Context as LocationContext } from '../context/LocationContext';
import useLocation from '../hooks/useLocation';
import TrackForm from '../components/trackForm';

const TrackCreateScreen = ({ isFocused }) => {
  const { addLocation } = useContext(LocationContext);
  const [err] = useLocation(isFocused, addLocation);

  return (
    <SafeAreaView>
      <Text h2>Create a Track</Text>
      <Map />
      {err ? <Text>Please enable location services </Text> : null}
      <TrackForm />
    </SafeAreaView>
  );
};

export default withNavigationFocus(TrackCreateScreen);

const styles = StyleSheet.create({});
