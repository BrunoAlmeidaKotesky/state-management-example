import { useAppStore } from "./store";

export const UserDisplay = () => {
    const user = useAppStore(state => state.user);

    return (
        <div>
            <p>User: <b style={{color: user?.online ? '#00bd00' : 'red'}}>{user?.name}</b></p>
        </div>
    )
}