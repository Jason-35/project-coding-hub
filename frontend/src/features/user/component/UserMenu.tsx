import { UserIcon, MailIcon, UsersIcon, LogOutIcon, SquarePlusIcon } from "lucide-react"

function UserMenu({showMenu} : {showMenu: boolean}) {
  return (
    <div className={`fixed ${showMenu ? "scale-100" : "scale-0"} rounded-lg transition duration-150 ease-in origin-top-left flex flex-col translate-x-24 w-52 h-fit bg-orange-400 gap-4 p-2`}>
        <div className="pl-4 truncate">
            Mango
        </div>
        <div className="flex gap-2 hover:cursor-pointer hover:bg-black hover:text-white hover:rounded-md p-2">
            <div className="pl-1">ID:</div>
            <div>0198362465</div>
        </div>
        <div className="flex gap-4 hover:cursor-pointer hover:bg-black hover:text-white hover:rounded-md p-2">
            <UserIcon />
            <div>Profile</div>
        </div>
        <div className="flex gap-4 hover:cursor-pointer hover:bg-black hover:text-white hover:rounded-md p-2">
            <MailIcon />
            <div>Mail</div>
        </div>
        <div className="flex gap-4 hover:cursor-pointer hover:bg-black hover:text-white hover:rounded-md p-2">
            <UsersIcon />
            <div>Friends</div>
        </div>
        <div className="flex gap-4 hover:cursor-pointer hover:bg-black hover:text-white hover:rounded-md p-2">
            <SquarePlusIcon />
            <div>Create Project</div>
        </div>
        <div className="flex gap-4 hover:cursor-pointer hover:bg-black hover:text-white hover:rounded-md p-2">
            <LogOutIcon />
            <div>Logout</div>
        </div>
    </div> 
  )
}

export default UserMenu