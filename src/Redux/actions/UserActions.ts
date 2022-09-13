import { createAction, createReducer, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../models/IUser";
import { userInitialState } from "../../constants";

export const setUser = createAction<IUser>('setUser');
export const userReducer = createReducer(userInitialState, (builder) => {
    builder.addCase(setUser, (state, action) => state = action.payload);
})

export const setUser2 = (state: IUser, {payload}: PayloadAction<IUser>) => state = payload;