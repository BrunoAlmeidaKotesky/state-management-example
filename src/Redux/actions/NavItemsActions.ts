import { createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { INavItem } from "../../models/INavItem";
import { sleep } from "../../services/services";
import { RootState } from "../store";

type ActType<Payload> = (state: INavItem[], action: PayloadAction<Payload>) => void;
export default class NavActions {
    
    static removeNavItem: ActType<number> = (state, {payload}) => { state.splice(payload, 1) }

    static addNavItem: ActType<void> = (state) => {
        state.push({
            icon: 'Unknown', 
            label: `Icon ${state.length + 1}`, 
            url: new Date().getTime().toString(), 
            id: state.length + 1
        });
    }

    static updateNavItem: ActType<{key: keyof Omit<INavItem, 'id'>, value: string, idx: number}> = (state, {payload}) => {
        const {idx, key, value} = payload;
        state[idx][key] = value;
    }

    static setNavItems: ActType<INavItem[]> = (state, {payload}) => state = payload;
    
    static fetchNavItemsParallel = createAsyncThunk<INavItem[], void, {}>('fetchNavItemsParallel', async (store, thunkApi) => {
        await sleep(7000);
        return [
            {id: new Date().getTime(), icon: 'Bookmark', label: 'Bookmark', url: '/404'}
        ]
    })
}