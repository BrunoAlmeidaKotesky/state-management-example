import { createSlice } from '@reduxjs/toolkit';
import { userInitialState } from "../../constants";
import {setUser, setUser2} from '../actions/UserActions';

export const userSlice = createSlice({
    name: 'user',
    initialState: userInitialState,
    reducers: {
        setUser2
    },
    extraReducers: (builder => {
        builder.addCase(setUser, (state, action) => state = action.payload);
    })
})

export default userSlice.reducer;
export const userActions = userSlice.actions;