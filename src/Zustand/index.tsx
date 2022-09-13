import { useEffect } from "react";
import { getUserInfo, getNavItems } from "../services/services";
import {useAppStore} from './store';
import { AdminPage } from "./AdminPage";
import {Header} from './Header';

export default function Main() {
    const {setNavItems, setUser} = useAppStore((state) => state);
    
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
            <Header />
            <AdminPage />
        </div>
    )
}