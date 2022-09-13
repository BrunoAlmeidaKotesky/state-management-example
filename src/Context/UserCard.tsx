import { useContext } from 'react';
import { AppCtx } from '.';
import styles from '../styles/index.module.css';

export const UserCard = () => {
    const {user} = useContext(AppCtx);

    return (
        <div className={styles["card"]}>
            <img src={user?.photo} alt="Avatar" style={{width: '100%'}}/>
                <div className="container">
                    <h4><b>{user?.name}</b></h4>
                    <p>{user?.email}</p>
                </div>
        </div>
    )
}