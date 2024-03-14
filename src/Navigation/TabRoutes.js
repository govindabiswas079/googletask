import React, { Fragment } from 'react'
import { StatusBar, View } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import AntDesign from 'react-native-vector-icons/AntDesign'
// import { SvgXml } from 'react-native-svg';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { UsersList, MapScreen } from '../screen'
import { colors } from '../theme';

const Tab = createBottomTabNavigator();
const TabRoutes = () => {

    return (
        <Fragment>
            <StatusBar barStyle={'dark-content'} backgroundColor={colors?.common?.background} />

            <Tab.Navigator
                initialRouteName='users'
                screenOptions={{
                    headerShown: false,
                    tabBarStyle: { backgroundColor: colors?.primary?.main, height: 60, marginHorizontal: 15, marginVertical: 5, borderRadius: 18 },
                }}
            >
                <Tab.Screen
                    name="users"
                    component={UsersList}
                    options={{
                        tabBarShowLabel: false,
                        tabBarIcon: ({ focused }) => {
                            return (
                                <View style={{ backgroundColor: focused ? "#4A5975" : "transparent", width: 45, height: 45, borderRadius: (45 / 2), alignItems: "center", justifyContent: "center", }}>
                                    <AntDesign name={"user"} size={20} color={colors?.common?.white} />
                                </View>
                            )
                        }
                    }}
                />
                <Tab.Screen
                    name="map"
                    component={MapScreen}
                    options={{
                        tabBarShowLabel: false,
                        tabBarIcon: ({ focused }) => {
                            return (
                                <View style={{ backgroundColor: focused ? "#4A5975" : "transparent", width: 45, height: 45, borderRadius: (45 / 2), alignItems: "center", justifyContent: "center", }}>
                                    <Feather name={"map-pin"} size={20} color={colors?.common?.white} />
                                </View>
                            )
                        }
                    }}
                />
            </Tab.Navigator>
        </Fragment>
    )
}

export default TabRoutes