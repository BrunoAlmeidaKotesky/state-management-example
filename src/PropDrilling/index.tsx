import { useEffect, useState } from "react";
import { INavItem } from "../models/INavItem";
import { IUser } from "../models/IUser";
import { getUserInfo, getNavItems } from "../services/services";
import { AdminPage } from "./AdminPage";
import {Header} from './Header';

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
            <Header user={user} navItems={navItems}/>
            <AdminPage 
                navItems={navItems}
                setNavItems={setNavItems}
                setUser={setUser}
                user={user}/>
        </div>
    )
}