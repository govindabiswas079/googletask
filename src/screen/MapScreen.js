import { View, Dimensions, StyleSheet, Text, ActivityIndicator, StatusBar } from 'react-native'
import React, { useEffect, useState } from 'react'
import { LocationPermission, getCurrentLocation } from '../helper/getPermissionLocation';
import { check, PERMISSIONS, RESULTS } from 'react-native-permissions';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import { colors } from '../theme';

const screen = Dimensions.get('window');
const MapScreen = () => {
  const [location, setLocation] = useState(null)

  useEffect(() => {
    Geolocation.getCurrentPosition(info => setLocation(info?.coords));
  }, [])

  return (
    <View style={{ ...StyleSheet.absoluteFill }}>
        <StatusBar translucent={true}  backgroundColor={"transparent"} />
      {location === null ?
        <>
          <View style={{ ...StyleSheet.absoluteFillObject, alignItems: 'center', justifyContent: 'center', backgroundColor: colors?.background?.main }}>
            <ActivityIndicator size={'large'} color={colors?.primary?.main} />
          </View>
        </>
        :
        <MapView
          mapType={'standard'} // MapType // standard // satellite // hybrid // terrain // mutedStandard-ios only
          initialRegion={{
            latitude: location?.latitude,
            longitude: location?.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: screen.width / screen.height,
          }}
          onMapReady={() => {

          }}
          annotations={20}
          provider={PROVIDER_GOOGLE}
          style={{
            ...StyleSheet.absoluteFillObject,
          }}
          showsTraffic={false}
          showsCompass={false}
          compassOffset={{ x: 100, y: 50 }}
          loadingBackgroundColor="#FFFFFF"
          loadingIndicatorColor={'green'}
          mapPadding={{
            top: 25,
            right: 0,
            bottom: 0,
            left: 0,
          }}
          showsIndoors={true}
          showsScale={true}
          showsBuildings={true}
          // onLayout={(data) => { }}
          // onMapReady={(data) => { }}
          showsMyLocationButton={true}
          showsUserLocation={true}
          followsUserLocation={true}
          userLocationPriority={'high'}
          loadingEnabled={true}
          minZoomLevel={1}
          maxZoomLevel={50}
          zoom={5}
          zoomEnabled={true}
          // enableZoomControl={true}
          // zoomTapEnabled={true}
          pitchEnabled={true}
        >
          <Marker coordinate={{
            latitude: location?.latitude,
            longitude: location?.longitude,
          }}
          />
        </MapView>
      }
    </View>
  )
}
export default MapScreen