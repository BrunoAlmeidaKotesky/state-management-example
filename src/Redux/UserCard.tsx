import styles from '../styles/index.module.css';
import {useSelector} from 'react-redux';
import { userCardSelector } from './selectors/userSelector';

export const UserCard = () => {
    const { photo, email, name } = useSelector(userCardSelector);

    return (
        <div className={styles["card"]}>
            <img src={photo} alt="Avatar" style={{width: '100%'}}/>
                <div className="container">
                    <h4><b>{name}</b></h4>
                    <p>{email}</p>
                </div>
        </div>
    )
}