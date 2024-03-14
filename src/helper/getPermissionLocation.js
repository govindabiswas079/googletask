import { Platform } from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import { requestMultiple, PERMISSIONS } from 'react-native-permissions';

export const getCurrentLocation = () => {
    return new Promise((resolve, reject) => {
        Geolocation.getCurrentPosition(position => {
            const cords = { ...position?.coords };
            console.log(cords)
            resolve(cords);
        },
            error => {
                reject(error.message);
            },
            {
                enableHighAccuracy: true,
                timeout: 15000,
                maximumAge: 10000
            },
        )
    })
}

export const LocationPermission = (Navigation) => {

    return new Promise(async (resolve, reject) => {
        if (Platform.OS === 'ios') {
            requestMultiple([PERMISSIONS.IOS.LOCATION_ALWAYS, PERMISSIONS.IOS.LOCATION_WHEN_IN_USE])
                .then((statuses) => {

                })
                .catch(() => {

                })
        } else {
            Geolocation.requestAuthorization(
                success = (success) => {
                    resolve({ PERMISSIONS: "granted" })
                },
                error = (error) => {
                    reject(error)
                }
            )
        }
    })
}