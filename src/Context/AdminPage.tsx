import { NavEdit } from "./NavEdit";
import { UserCard } from "./UserCard";
import { UserEdit } from "./UserEdit";
import styles from '../styles/index.module.css';

export const AdminPage = () => {

    return (
        <div className={styles['adminPage']}>
            <UserCard />
            <UserEdit />
            <NavEdit />
        </div>
    );
}