import React, { Fragment } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { colors } from '../theme';
import TabRoutes from './TabRoutes';
import { RNMap, UserDetails } from '../screen';

const AppStack = createNativeStackNavigator()
const AppRoute = () => {
    return (
        <Fragment>
            <AppStack.Navigator screenOptions={{
                animationEnabled: true,
                animationTypeForReplace: "push",
                presentation: "modal",
                headerShown: false,
                animation: "slide_from_right",
                gestureDirection: "horizontal",
                fullScreenGestureEnabled: true,
                orientation: "portrait",
                contentStyle: {
                    backgroundColor: colors?.background?.main,
                }
            }}>
                <AppStack.Screen
                    name='app'
                    component={TabRoutes}
                    options={{
                        statusBarHidden: false,
                        statusBarAnimation: "slide",
                        statusBarStyle: "dark",
                        statusBarColor: colors?.background?.main,
                        statusBarTranslucent: false,
                        // orientation:"landscape"
                    }}
                />
                <AppStack.Screen
                    name='user/detail'
                    component={UserDetails}
                    options={{
                        statusBarHidden: false,
                        statusBarAnimation: "slide",
                        statusBarStyle: "dark",
                        statusBarColor: colors?.background?.main,
                        statusBarTranslucent: false,
                        // orientation:"landscape"
                    }}
                />
                <AppStack.Screen
                    name='user/location'
                    component={RNMap}
                    options={{
                        statusBarHidden: false,
                        statusBarAnimation: "slide",
                        statusBarStyle: "dark",
                        statusBarColor: "transparent",
                        statusBarTranslucent: true,
                        // orientation:"landscape"
                    }}
                />
            </AppStack.Navigator>
        </Fragment>
    )
}

export default AppRoute