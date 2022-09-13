import { useContext } from "react"
import { AppCtx } from "."

export const UserDisplay = () => {
    const { user } = useContext(AppCtx);

    return (
        <div>
            <p>User: <b style={{color: user?.online ? '#00bd00' : 'red'}}>{user?.name}</b></p>
        </div>
    )
}