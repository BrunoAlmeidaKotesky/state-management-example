import { ChangeEvent, SetStateAction } from "react";
import { IUser } from "../models/IUser"
import styles from '../styles/index.module.css';

interface IUserEdit {
    user: IUser;
    setUser: React.Dispatch<SetStateAction<IUser>>;
}

export const UserEdit = ({setUser, user}: IUserEdit) => {
    const onChange = ({target: {value, checked, id}}: ChangeEvent<HTMLInputElement>) => {
        const newValue = id === 'online' ? checked : value;
        setUser({...user, [id]: newValue});
    }

    return (
    <div className={styles['userForm']}>
        <div><label>Name: </label><input id="name" onChange={onChange} value={user.name} type="text" /></div>
        <div><label>E-mail: </label><input id="email" onChange={onChange} value={user.email} type="email" /></div>
        <div><label>Image Url: </label><input id="photo" onChange={onChange} value={user.photo} type="text" /></div>
        <div><label>Online: </label><input id="online" onChange={onChange} checked={user.online} type="checkbox" /></div>
    </div>);
}