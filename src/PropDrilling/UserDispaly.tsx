
export const UserDisplay = ({name, online}: {name: string, online: boolean}) => {
    return (
        <div>
            <p>User: <b style={{color: online ? '#00bd00' : 'red'}}>{name}</b></p>
        </div>
    )
}