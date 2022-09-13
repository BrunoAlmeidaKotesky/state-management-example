import { createDraftSafeSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

const baseSelector = (store: RootState) => store;
export const userCardSelector = createDraftSafeSelector(baseSelector, (store => ({
        photo: store.userSlice?.photo,
        name: store.userSlice?.name,
        email: store.userSlice?.email
    }))
);

export const userDisplaySelector = createDraftSafeSelector(baseSelector, (store) => {
    return {
        name: store.userSlice?.name?.toUpperCase(),
        connectionColor: store.userSlice?.online ? '#00bd00' : 'red'
    }
})