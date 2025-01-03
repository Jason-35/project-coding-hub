import { UserIcon, InboxIcon, UsersIcon, LogOutIcon, SquarePlusIcon } from "lucide-react"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getUserInfo } from "../../auth/util/util"

function UserMenu({unread, showMenu, setShowMenu, setShowCreateServer, setShowInbox} : {unread: number, showMenu: boolean, setShowMenu: React.Dispatch<React.SetStateAction<boolean>>, setShowCreateServer: React.Dispatch<React.SetStateAction<boolean>>, setShowInbox: React.Dispatch<React.SetStateAction<boolean>>}) {

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
        <div className="flex gap-2 hover:cursor-pointer hover:bg-black hover:text-white hover:rounded-md p-2">
            <div className="pl-1">ID:</div>
            <div>0198362465</div>
        </div>
        <div className="flex gap-4 hover:cursor-pointer hover:bg-black hover:text-white hover:rounded-md p-2">
            <UserIcon />
            <div>Profile</div>
        </div>
        <div className="flex gap-4 hover:cursor-pointer hover:bg-black hover:text-white hover:rounded-md p-2"
            onClick={() => {
                setShowInbox(true)
                setShowMenu(false)
            }}>
            <div className="relative">
                <InboxIcon />
                {unread > 0 &&
                <div className="border-2 border-black rounded-full aspect-square flex justify-center items-center bg-black text-orange-400 h-4 absolute -top-1 right-4">
                    {unread}
                </div>}
            </div>
            <div>Inbox</div>
        </div>
        <div className="flex gap-4 hover:cursor-pointer hover:bg-black hover:text-white hover:rounded-md p-2">
            <UsersIcon />
            <div>Friends</div>
        </div>
        <div className="flex gap-4 hover:cursor-pointer hover:bg-black hover:text-white hover:rounded-md p-2"
            onClick={() => {
                setShowMenu(false)
                setShowCreateServer(true)
            }}>
            <SquarePlusIcon />
            <div>Create Project</div>
        </div>
        <div className="flex gap-4 hover:cursor-pointer hover:bg-black hover:text-white hover:rounded-md p-2"
            onClick={handleLogout}>
            <LogOutIcon />
            <div>Logout</div>
        </div>
    </div> 
  )
}

export default UserMenu