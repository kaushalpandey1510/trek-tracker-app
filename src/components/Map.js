import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import MapView from 'react-native-maps';

const Map = () => {
  return (
    <View>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.33233,
          longitude: -122.03121,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      />
    </View>
  );
};

export default Map;

const styles = StyleSheet.create({
  map: {
    height: 300,
  },
});
