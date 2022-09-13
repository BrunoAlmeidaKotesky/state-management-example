import { createSlice } from '@reduxjs/toolkit';
import { navItemsInitialState } from "../../constants";
import NavActions from '../actions/NavItemsActions';

export const navigationSlice = createSlice({
    name: 'navItems',
    initialState: navItemsInitialState,
    reducers: {
        addItem: NavActions.addNavItem,
        removeItem: NavActions.removeNavItem,
        updateNavItem: NavActions.updateNavItem,
        setNavItems: NavActions.setNavItems
    },
    extraReducers: (builder => {
        builder.addCase(NavActions.fetchNavItemsParallel.fulfilled, (state, {payload}) => {
            state.push(...payload);
        })
    })
})

export default navigationSlice.reducer;
export const navItemsActions = navigationSlice.actions;