import { HomeIcon, MailIcon, CompassIcon } from "lucide-react"
import UserProfile from "../features/user/component/UserProfile"
import ServerIcon from "../features/projectServer/component/ServerIcon"
import kitty from "../assets/kitty.png"
import flappy from "../assets/flappy.png"
import Tooltip from "./Tooltip"
import UserMenu from "../features/user/component/UserMenu"
import { useState } from "react"

function Sidebar() {
    const [showMenu, setShowMenu] = useState<boolean>(false)
    return (
        <div className="fixed w-screen bg-transparent h-screen overflow-y-scroll pointer-events-none">
            <div className="sticky border-r-2 min-h-screen border-blue-400 flex flex-col gap-3 w-fit p-4 bg-white pointer-events-auto">
                <div>
                    <UserMenu showMenu={showMenu} />
                    <div className="hover:cursor-pointer" onClick={() => setShowMenu(!showMenu)}>
                        <UserProfile />
                    </div>
                </div>
                <div className="border-[1px] border-black" />

                <Tooltip content={"Flappy Bird"}>
                        <ServerIcon serverName={"Flappy Bird"} serverImg={flappy} serverUrl="abc" />
                </Tooltip>
                <Tooltip content={"Flappy Bird"}>
                        <ServerIcon serverName={"Flappy Bird"} serverImg={flappy} serverUrl="def"/>
                </Tooltip>
                <Tooltip content={"Super Kitty"}>
                        <ServerIcon serverName={"Super Kitty"} serverImg={kitty} serverUrl="ghi"/>
                </Tooltip>
            

                <div className="aspect-square rounded-lg flex justify-center items-center bg-orange-300">
                    <CompassIcon className="w-full h-full p-2" strokeWidth={1} />
                </div>
            </div>        
        </div>
  )
}

export default Sidebar