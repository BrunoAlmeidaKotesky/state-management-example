import { SetStateAction } from "react";
import { INavItem } from "../models/INavItem";
import { IUser } from "../models/IUser";
import { NavEdit } from "./NavEdit";
import { UserCard } from "./UserCard";
import { UserEdit } from "./UserEdit";
import styles from '../styles/index.module.css';

interface IAdminPage {
    user: IUser;
    navItems: INavItem[];
    setUser: React.Dispatch<SetStateAction<IUser>>;
    setNavItems: React.Dispatch<SetStateAction<INavItem[]>>;
}
export const AdminPage = (props: IAdminPage) => {

    return (
        <div className={styles['adminPage']}>
            <UserCard user={props.user}/>
            <UserEdit user={props.user} setUser={props.setUser}/>
            <NavEdit navItems={props.navItems} setNavItems={props.setNavItems}/>
        </div>
    );
}