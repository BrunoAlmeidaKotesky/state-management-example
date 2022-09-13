import { INavItem } from "../models/INavItem"
import { NavItems } from "./NavItems"
import { UserDisplay } from "./UserDispaly"
import styles from '../styles/index.module.css';
import { IUser } from "../models/IUser";

//Render a header
export const Header = ({user, navItems}: {user: IUser, navItems: INavItem[]}) => {
    return (
        <header className={styles['header']}>
            <h3>Prop Drilling</h3>
            <UserDisplay online={user.online} name={user.name}/>
            <NavItems navItems={navItems}/>
        </header>
    )
}