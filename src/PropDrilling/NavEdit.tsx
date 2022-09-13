import { SetStateAction, useState } from "react";
import { INavItem } from "../models/INavItem";

interface INavEdit {
    navItems: INavItem[];
    setNavItems: React.Dispatch<SetStateAction<INavItem[]>>;
}
export const NavEdit = ({navItems, setNavItems}: INavEdit) => {
    const [editingId, setIsEditing] = useState<number | null>(null);

    const onEdit = (id: number) => {
        setIsEditing(id);
    }

    const onRemove = (idx: number) => {
        setIsEditing(null);
        setNavItems(navItems.filter((_, i) => i !== idx));
    }
    
    const onValueChange = (idx: number, value: string, type: keyof Omit<INavItem, 'id'>) => {
        const newItems = [...navItems];
        newItems[idx][type] = value;
        setNavItems(newItems);
    }

    return (
        <div>
            <h3>Edit navigation items</h3>
            <div>
            {navItems.map((item, idx) => (
                <div style={{display: 'flex'}} key={item.id}>
                    {editingId === item.id ? <>
                        <div><label>Label: </label><input value={item.label} onChange={({target: {value}}) => onValueChange(idx, value, 'label')} type="text"/></div>
                        <div><label>Icon: </label><input value={item.icon} onChange={({target: {value}}) => onValueChange(idx, value, 'icon')} type="text"/></div>
                        <div><label>Url: </label><input value={item.url} onChange={({target: {value}}) => onValueChange(idx, value, 'url')} type="text"/></div>
                    </>: 
                    <>
                        <span>{item.label}</span>
                        <span>Icon: <p>{item.icon}</p></span>
                        <span>Url: <p>{item.url}</p></span>
                    </>}
                    <button onClick={() => onRemove(idx)}>Delete</button>
                    <button onClick={() => onEdit(item.id)}>Edit</button>
                </div>
            ))}
            <button onClick={() => setNavItems(p => [...p, {icon: 'Unknown', label: `Icon ${p.length + 1}`, url: new Date().getTime().toString(), id: p.length + 1}])}>Add</button>
            </div>
        </div>
    );
}