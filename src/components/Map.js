import React, { useContext } from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import MapView, { Circle } from 'react-native-maps';
import { Context as LocationContext } from '../context/LocationContext';

const Map = () => {
  const {
    state: { currentLocation },
  } = useContext(LocationContext);

  if (!currentLocation) {
    return <ActivityIndicator size='large' style={{ marginTop: 200 }} />;
  }

  initialLocation = {
    longitude: -80.52332002677072,
    latitude: 43.41498076919784,
  };

  // let points = [];
  // for (let i = 0; i < 20; i++) {
  //   if (i % 2 === 0) {
  //     points.push({
  //       latitude: 37.33233 + i * 0.001,
  //       longitude: -80.52332002677072 + i * 0.001,
  //     });
  //   } else {
  //     points.push({
  //       latitude: 37.33233 - i * 0.002,
  //       longitude: -122.03121 + i * 0.001,
  //     });
  //   }
  // }

  return (
    <MapView
      style={styles.map}
      initialRegion={{
        ...initialLocation,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
    >
      <Circle
        center={currentLocation.coords}
        radius={30}
        strokeColor='rgba(158, 158, 255, 1.0)'
        fillColor='rgba(158, 158, 255, 0.3)'
      />
    </MapView>
  );
};

export default Map;

const styles = StyleSheet.create({
  map: {
    height: 300,
  },
});
