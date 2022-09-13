import create from 'zustand';
import { INavItem } from '../models/INavItem';
import { IUser } from '../models/IUser';
import produce from 'immer';

export interface IStore {
    user: IUser;
    setUser: (user: IUser) => void;
    navItems: INavItem[];
    removeNavItem: (idx: number) => void;
    addNavItem: () => void;
    setNavItems: (items: INavItem[]) => void;
    updateNavItem: (idx: number, value: string, key: keyof Omit<INavItem, 'id'>) => void;
}

export const useAppStore = create<IStore>((set, get, api) => {
    return {
        user: null,
        navItems: [],
        setUser: (user: IUser) => set((
            produce((state: IStore) => {
                state.user = user;
            })
        )),
        setNavItems: (items) => set((state) => ({...state, navItems: [...items]})),
        addNavItem: () => set(
                produce(({navItems}: IStore) => {
                    navItems.push({
                        icon: 'Unknown', 
                        label: `Icon ${navItems.length + 1}`, 
                        url: new Date().getTime().toString(), 
                        id: navItems.length + 1
                })
            })
        ),
        removeNavItem: (idx) => set(
            produce(({navItems}: IStore) => {
                navItems.splice(idx, 1);
            })
        ),
        updateNavItem: (idx, value, key) => set(
            produce(({navItems}: IStore) => {
                navItems[idx][key] = value;
            })
        )
    }
})