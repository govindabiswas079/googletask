import { View, Text, FlatList, Pressable } from 'react-native'
import React, { Fragment } from 'react'
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { colors, shape, FontStyle } from '../theme'
import { setGetUser } from '../store/reducer/UserReducer';

const UsersList = () => {
  const dispatch = useDispatch()
  const { users } = useSelector((state) => state?.User)
  const navigation = useNavigation();

  return (
    <Fragment>
      <View style={{ paddingHorizontal: 15, paddingVertical: 10, backgroundColor: colors.background.main }}>
        <Text style={{ ...FontStyle(colors.common.black, 22, 700) }}>Users</Text>
      </View>
      <FlatList
        style={{ backgroundColor: colors.background.main }}
        contentContainerStyle={{ paddingHorizontal: 15, paddingVertical: 15 }}
        data={users || []}
        renderItem={({ item }) => {

          return (
            <Fragment>
              <Pressable onPress={() => { dispatch(setGetUser({ user: item })); navigation.navigate("user/detail") }} style={{ backgroundColor: colors.primary.blueGrey[50], elevation: 5, paddingHorizontal: 10, paddingVertical: 15, borderRadius: shape.borderRadius, gap: 15 }}>
                <View style={{ gap: 3 }}>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text style={{ ...FontStyle(colors.common.black, 20, 700), flex: 1 }}>{item?.name}</Text>
                    <View style={{ flexDirection: "row", alignItems: "center", gap: 15 }}>
                      <Pressable onPress={() => { navigation.navigate("user/location") }} style={{ alignItems: "center", justifyContent: 'centerf' }}>
                        <Ionicons name='navigate' color={colors?.common?.black} size={24} />
                      </Pressable>
                      <Pressable style={{ alignItems: "center", justifyContent: 'centerf' }}>
                        <AntDesign name='edit' color={colors?.common?.black} size={24} />
                      </Pressable>
                    </View>
                  </View>

                  <Text style={{ ...FontStyle(colors.common.black, 15, 700) }}>{item?.email}</Text>
                  <Text style={{ ...FontStyle(colors.common.black, 15, 700) }}>{item?.phone}</Text>
                </View>

              </Pressable>
            </Fragment>
          )
        }}
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
      />
    </Fragment>
  )
}

export default UsersList