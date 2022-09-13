import { useEffect } from "react";
import { getUserInfo, getNavItems } from "../../src/services/services";
import { AdminPage } from "./AdminPage";
import { Header } from './Header';
import { useDispatch } from 'react-redux';
import { userActions } from "./slices/userSlice";
import NavActions from "./actions/NavItemsActions";
import { navItemsActions } from "./slices/navigationSlice";

export default function Main() {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async () => {
            //@ts-ignore
            dispatch(NavActions.fetchNavItemsParallel());
            const [users, items] = await Promise.all([getUserInfo(), getNavItems()]);
            dispatch(navItemsActions.setNavItems(items));
            dispatch(userActions.setUser2(users));
        }
        fetchData();
    }, []);

    return (
        <div style={{ width: '95vw' }}>
            <Header />
            <AdminPage />
        </div>
    )
}