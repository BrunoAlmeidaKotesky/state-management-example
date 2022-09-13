import { ChangeEvent, useState } from "react";
import {useDispatch, useSelector} from 'react-redux';
import { RootState } from "./store";
import { navItemsActions } from "./slices/navigationSlice";
import { INavItem } from "../models/INavItem";

export const NavEdit = () => {
    const dispatch = useDispatch();
    const navItems = useSelector((store: RootState) => store.navigationSlice);
    const [editingId, setIsEditing] = useState<number | null>(null);

    const onEdit = (id: number) => { setIsEditing(id); }
    const onChangeItem = (idx: number) => ({target: {value, id}}: ChangeEvent<HTMLInputElement>) => {
        dispatch(navItemsActions.updateNavItem({
            value, 
            idx, 
            key: id as keyof Omit<INavItem, 'id'>
        }));
    }

    return (
        <div>
            <h3>Edit navigation items</h3>
            <div>
            {navItems.map((item, idx) => (
                <div style={{display: 'flex'}} key={item.id}>
                    {editingId === item.id ? <>
                        <div>
                            <label>Label: </label>
                            <input id="label" value={item.label} onChange={onChangeItem(idx)} type="text"/>
                        </div>
                        <div>
                            <label>Icon: </label>
                            <input id="icon" value={item.icon} onChange={onChangeItem(idx)} type="text"/>
                            </div>
                        <div><label>Url: </label><input id="url" value={item.url} onChange={onChangeItem(idx)} type="text"/></div>
                    </> : <>
                        <span>{item.label}</span>
                        <span>Icon: <p>{item.icon}</p></span>
                        <span>Url: <p>{item.url}</p></span>
                    </>}
                    <button onClick={() => dispatch(navItemsActions.removeItem(idx))}>Delete</button>
                    <button onClick={() => onEdit(item.id)}>Edit</button>
                </div>
            ))}
            <button onClick={() => dispatch(navItemsActions.addItem())}>Add</button>
            </div>
        </div>
    );
}