import { View, Text, FlatList, Pressable } from 'react-native'
import React, { Fragment } from 'react'
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { colors, shape, FontStyle } from '../theme'

const UserDetails = () => {
  const { user } = useSelector((state) => state?.User)
  const dispatch = useDispatch()
  const navigation = useNavigation();

  return (
    <Fragment>
      <View style={{ flex: 1, paddingHorizontal: 15 }}>
        <View style={{ flexDirection: 'row', alignItems: "center", gap: 10, paddingVertical: 10 }}>
          <Ionicons onPress={() => { navigation.goBack() }} name='arrow-back-outline' color={colors.common.black} size={22} />
          <Text style={{ ...FontStyle(colors.common.black, 20, 700) }}>
            {user.name}
          </Text>
        </View>
        <Pressable style={{ backgroundColor: colors.primary.blueGrey[50], elevation: 5, marginVertical: 10, paddingHorizontal: 10, paddingVertical: 15, borderRadius: shape.borderRadius }}>
          <View style={{ gap: 3 }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={{ ...FontStyle(colors.common.black, 20, 700), flex: 1 }}>{user?.name}</Text>
              <View style={{ flexDirection: "row", alignItems: "center", gap: 15 }}>
                <Pressable onPress={() => { navigation.navigate("user/location") }} style={{ alignItems: "center", justifyContent: 'centerf' }}>
                  <Ionicons name='navigate' color={colors?.common?.black} size={24} />
                </Pressable>
                <Pressable style={{ alignItems: "center", justifyContent: 'centerf' }}>
                  <AntDesign name='edit' color={colors?.common?.black} size={24} />
                </Pressable>
              </View>
            </View>

            <Text style={{ ...FontStyle(colors.common.black, 15, 700) }}>{user?.email}</Text>
            <Text style={{ ...FontStyle(colors.common.black, 15, 700) }}>{user?.phone}</Text>

            <Text style={{ ...FontStyle(colors.primary.blueGrey[300], 15, 700), paddingVertical: 10 }}>Location</Text>
            <Text style={{ ...FontStyle(colors.common.black, 15, 700) }}>Latitude: {user?.location?.lat}</Text>
            <Text style={{ ...FontStyle(colors.common.black, 15, 700) }}>Longitude: {user?.location?.lng}</Text>

          </View>
        </Pressable>
      </View>
    </Fragment>
  )
}

export default UserDetails