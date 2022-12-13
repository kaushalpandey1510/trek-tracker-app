import { StyleSheet, View, SafeAreaView } from 'react-native';
import { Text } from '@rneui/themed';
import React from 'react';
import Map from '../components/Map';

const TrackCreateScreen = () => {
  return (
    <SafeAreaView>
      <Text h2>Create a Track</Text>
      <Map />
    </SafeAreaView>
  );
};

export default TrackCreateScreen;

const styles = StyleSheet.create({});
