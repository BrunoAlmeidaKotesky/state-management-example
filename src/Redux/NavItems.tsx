import { useSelector } from 'react-redux';
import styles from '../styles/index.module.css';
import { RootState } from './store';

export const NavItems = () => {
    const navItems = useSelector((store: RootState) => store.navigationSlice);

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