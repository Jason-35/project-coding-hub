import { Outlet } from "react-router-dom"
import { HomeIcon, MailIcon, CompassIcon } from "lucide-react"
import UserProfile from "../features/user/component/UserProfile"
import ServerIcon from "../features/projectServer/component/ServerIcon"
import kitty from "../assets/kitty.png"
import flappy from "../assets/flappy.png"

function Sidebar() {
  return (

        <div className="flex flex-col gap-4 p-4 border-r-2 border-orange-300 ">
            <div className="flex justify-center">
                <UserProfile />
            </div>
            <div className="border-[1px] border-black" />
            <div className="flex flex-col items-center overflow-scroll gap-2 h-[80%] scrollbar-hidden">
                <ServerIcon serverName={"Calculator"} serverImg={kitty}/>
                <ServerIcon serverName={"Flappy Bird"} serverImg={flappy} />
                <ServerIcon serverName={"TODO App"} />
                <ServerIcon serverName={"Music Creator"} />
            </div>
            <div className="aspect-square rounded-lg flex justify-center items-center bg-orange-300">
                <CompassIcon className="w-full h-full p-2" strokeWidth={1} />
            </div>
        </div>

  )
}

export default Sidebar