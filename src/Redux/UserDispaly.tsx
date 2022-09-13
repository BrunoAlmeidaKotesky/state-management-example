import { useSelector } from "react-redux";
import { userDisplaySelector } from "./selectors/userSelector";

export const UserDisplay = () => {
    const {name, connectionColor} = useSelector(userDisplaySelector);

    return (
        <div>
            <p>User: <b style={{color: connectionColor}}>{name}</b></p>
        </div>
    )
}