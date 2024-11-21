import { HomeIcon, MailIcon, CompassIcon } from "lucide-react"
import UserProfile from "../features/user/component/UserProfile"
import ServerIcon from "../features/projectServer/component/ServerIcon"
import kitty from "../assets/kitty.png"
import flappy from "../assets/flappy.png"
import Tooltip from "./Tooltip"

function Sidebar() {
  return (
        <div className="flex flex-col gap-4 p-4 border-r-2 border-orange-300">
            <div className="flex justify-center">
                <UserProfile />
            </div>
            <div className="border-[1px] border-black" />
            <div className="flex flex-col items-center gap-2 h-[80%] scrollbar-hidden w-full overflow-y-scroll ">
                <Tooltip content={"Flappy Bird"}>
                    <ServerIcon serverName={"Flappy Bird"} serverImg={flappy} />
                </Tooltip>
                <Tooltip content={"Calculator"}>
                    <ServerIcon serverName={"Calculator"} serverImg={kitty}/>
                </Tooltip>
                <Tooltip content={"Music Creator"}>
                    <ServerIcon serverName={"Music Creator"} />
                </Tooltip>
                <Tooltip content={"TODO"}>
                    <ServerIcon serverName={"TODO"}/>
                </Tooltip>
              
            </div>
            <div className="aspect-square rounded-lg flex justify-center items-center bg-orange-300">
                <CompassIcon className="w-full h-full p-2" strokeWidth={1} />
            </div>
        </div>

  )
}

export default Sidebar