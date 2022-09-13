import { useState } from "react";
import { useAppStore } from "./store";

export const NavEdit = () => {
    const {navItems, addNavItem, updateNavItem, removeNavItem} = useAppStore(state => state);
    const [editingId, setIsEditing] = useState<number | null>(null);

    const onEdit = (id: number) => { setIsEditing(id); }

    return (
        <div>
            <h3>Edit navigation items</h3>
            <div>
            {navItems.map((item, idx) => (
                <div style={{display: 'flex'}} key={item.id}>
                    {editingId === item.id ? <>
                        <div><label>Label: </label><input value={item.label} onChange={({target: {value}}) => updateNavItem(idx, value, 'label')} type="text"/></div>
                        <div><label>Icon: </label><input value={item.icon} onChange={({target: {value}}) => updateNavItem(idx, value, 'icon')} type="text"/></div>
                        <div><label>Url: </label><input value={item.url} onChange={({target: {value}}) => updateNavItem(idx, value, 'url')} type="text"/></div>
                    </>: 
                    <>
                        <span>{item.label}</span>
                        <span>Icon: <p>{item.icon}</p></span>
                        <span>Url: <p>{item.url}</p></span>
                    </>}
                    <button onClick={() => removeNavItem(idx)}>Delete</button>
                    <button onClick={() => onEdit(item.id)}>Edit</button>
                </div>
            ))}
            <button onClick={() => addNavItem()}>Add</button>
            </div>
        </div>
    );
}