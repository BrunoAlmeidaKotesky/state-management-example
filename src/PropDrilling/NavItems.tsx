import { INavItem } from "../models/INavItem"
import styles from '../styles/index.module.css';

export const NavItems = ({navItems}: {navItems: INavItem[]}) => {

    return (
        <nav className={styles['navItems']}>
            {navItems.map((item) => (
                <div key={item.url} style={{display: 'inline-flex'}}>
                    <i className={`ms-Icon ms-Icon--${item.icon}`}/>
                    <a href={item.url}>{item.label}</a>
                </div>
            ))}
        </nav>
    )
}