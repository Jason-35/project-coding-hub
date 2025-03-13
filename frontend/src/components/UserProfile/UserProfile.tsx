import { useState } from "react"
import UserImg from "./UserImg"
import UserMenu from "../UserMenu/UserMenu"

function UserProfile() {

    const [showMenu, setShowMenu] = useState<boolean>(false)

    return (
        <div>
            <UserMenu showMenu={showMenu} setShowMenu={setShowMenu} />
            <div className="hover:cursor-pointer" onClick={() => setShowMenu(!showMenu)}>
                <UserImg />
            </div>
        </div>
    )
}

export default UserProfile