import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    users: [
        {
            id: 1,
            name: "Prem Biswas",
            email: "govindbisws079@gmail.com",
            phone: 9511723507,
            location: {
                lat: 19.9615,
                lng: 79.2961
            }
        },
        {
            id: 2,
            name: "Kapil Biswas",
            email: "kapilbisws079@gmail.com",
            phone: 9087654312,
            location: {
                lat: 20.1003,
                lng: 79.1146
            }
        },
        {
            id: 3,
            name: "Rajeev Biswas",
            email: "rajeevbisws079@gmail.com",
            phone: 5647863978,
            location: {
                lat: 19.9615,
                lng: 79.2961
            }
        },
    ],
    user: null
};

const UserReducer = createSlice({
    name: 'UserReducer',
    initialState,
    reducers: {
        setUpdateUser: (state, action) => {
            state.isLogin = action?.payload.id
        },
        setDeleteUser: (state, action) => {
            state.isLogin = action?.payload.id
        },
        setGetUser: (state, action) => {
            state.user = action?.payload.user
        },
    },

});

export const { setUpdateUser, setDeleteUser, setGetUser } = UserReducer.actions;
export default UserReducer.reducer;