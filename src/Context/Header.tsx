import { NavItems } from "./NavItems"
import { UserDisplay } from "./UserDispaly"
import styles from '../styles/index.module.css';

export const Header = () => {
    return (
        <header className={styles['header']}>
            <h3>Prop Drilling</h3>
            <UserDisplay />
            <NavItems />
        </header>
    )
}