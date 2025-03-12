import { UserIcon, InboxIcon, UsersIcon, LogOutIcon } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { getUserInfo } from "../../auth/util/util"
import { useContext } from "react"
import { InboxContext } from "../../../context/InboxContext"
import MenuItem from "../../../components/MenuItem/MenuItem"

function UserMenu({showMenu, setShowMenu} : { showMenu: boolean, setShowMenu: React.Dispatch<React.SetStateAction<boolean>> }) {

    const inboxItem = useContext(InboxContext)
    const navigate = useNavigate()
    
    const handleLogout = () => {
        localStorage.clear()
        navigate("/login")
    }
    
    return (
    <div className={`fixed ${showMenu ? "scale-100" : "scale-0"} rounded-lg transition duration-150 ease-in origin-top-left flex flex-col translate-x-24 w-52 h-fit bg-orange-400 gap-4 p-2`}>
        
        <div className="pl-4 truncate">
            {getUserInfo()?.username}
        </div>
        
        <MenuItem icon={<div className="pl-1">ID:</div>} text="0198362465"/>

        <MenuItem icon={<UserIcon />} text="Profile"/>
        
        <div className="flex gap-4 hover:cursor-pointer hover:bg-black hover:text-white hover:rounded-md p-2"
            onClick={() => {
                inboxItem.setShowInbox(true)
                setShowMenu(false)
            }}>
            <div className="relative">
                <InboxIcon />
                {inboxItem.unread > 0 &&
                <div className="border-2 border-black rounded-full aspect-square flex justify-center items-center bg-black text-orange-400 h-4 absolute -top-1 right-4">
                    {inboxItem.unread}
                </div>}
            </div>
            <div>Inbox</div>
        </div>
        
        <MenuItem icon={<UsersIcon />} text="Friends"/>
        
        <MenuItem icon={<LogOutIcon />} text="logout" action={handleLogout}/>

    </div> 
  )
}

export default UserMenu