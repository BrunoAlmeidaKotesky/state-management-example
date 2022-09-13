import styles from '../styles/index.module.css';
import { useAppStore } from './store';

export const NavItems = () => {
    const navItems = useAppStore(state => state.navItems);

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