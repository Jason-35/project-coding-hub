import { UserIcon, MailIcon, UsersIcon, LogOutIcon } from "lucide-react"

function UserMenu({showMenu} : {showMenu: boolean}) {
  return (
    <div className={`fixed ${showMenu ? "scale-100" : "scale-0"} transition duration-150 ease-in origin-top-left flex flex-col translate-x-24 w-52 h-fit bg-orange-400 gap-4 p-2`}>
        <div className="flex">
            <div className="px-1 pr-2">ID:</div>
            <div>0198362465</div>
        </div>
        <div className="flex gap-4">
            <UserIcon />
            <div>Profile</div>
        </div>
        <div className="flex gap-4">
            <MailIcon />
            <div>Mail</div>
        </div>
        <div className="flex gap-4">
            <UsersIcon />
            <div>Friends</div>
        </div>
        <div className="flex gap-4">
            <LogOutIcon />
            <div>Logout</div>
        </div>
    </div> 
  )
}

export default UserMenu