import { createContext, useEffect, useState } from "react";
import { INavItem } from "../models/INavItem";
import { IUser } from "../models/IUser";
import { getUserInfo, getNavItems } from "../services/services";
import { AdminPage } from "./AdminPage";
import {Header} from './Header';

export const AppCtx = createContext<{
    user: IUser | null;
    setUser: React.Dispatch<React.SetStateAction<IUser>> | undefined;
    navItems: INavItem[];
    setNavItems: React.Dispatch<React.SetStateAction<INavItem[]>> | undefined;
}>({navItems: [], setNavItems: undefined, setUser: undefined, user: null});

export default function Main() {
    const [user, setUser] = useState({} as IUser);
    const [navItems, setNavItems] = useState<INavItem[]>([]);
    
    useEffect(() => {
        const fetchData = async () => {
           const [_users, items] = await Promise.all([getUserInfo(), getNavItems()]);
           setUser(_users);
           setNavItems(items);
        }
        fetchData();
    }, []);

    return (
        <div style={{width: '95vw'}}>
            <AppCtx.Provider value={{user, setUser, navItems, setNavItems}}>
                <Header />
                <AdminPage />
            </AppCtx.Provider>
        </div>
    )
}