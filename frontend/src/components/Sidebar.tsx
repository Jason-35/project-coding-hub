import { HomeIcon, MailIcon, CompassIcon } from "lucide-react"
import UserProfile from "../features/user/component/UserProfile"
import ServerIcon from "../features/projectServer/component/ServerIcon"
import kitty from "../assets/kitty.png"
import flappy from "../assets/flappy.png"
import Tooltip from "./Tooltip"

function Sidebar() {
  return (
        <div className="fixed w-screen bg-transparent h-screen overflow-y-scroll scrollbar-hidden pointer-events-none">
            <div className="sticky flex flex-col gap-3 w-fit p-4 bg-white pointer-events-auto">
                <div className="">
                    <UserProfile />
                    {/* <div className="fixed border-4 translate-x-24 w-96 h-fit bg-orange-400">
                        <div>ID: 0198362465</div>
                        <div>Profile</div>
                        <div>Mail</div>
                        <div>Friends</div>
                        <div>Logout</div>
                    </div> */}
                </div>
                <div className="border-[1px] border-black" />

                <Tooltip content={"Flappy Bird"}>
                        <ServerIcon serverName={"Flappy Bird"} serverImg={flappy} />
                </Tooltip>
                <Tooltip content={"Flappy Bird"}>
                        <ServerIcon serverName={"Flappy Bird"} serverImg={flappy} />
                    </Tooltip>
                <Tooltip content={"Flappy Bird"}>
                        <ServerIcon serverName={"Flappy Bird"} serverImg={flappy} />
                </Tooltip>
                <Tooltip content={"Flappy Bird"}>
                        <ServerIcon serverName={"Flappy Bird"} serverImg={flappy} />
                </Tooltip>
                <Tooltip content={"Flappy Bird"}>
                    <ServerIcon serverName={"Flappy Bird"} serverImg={flappy} />
                </Tooltip>
                <Tooltip content={"Flappy Bird"}>
                    <ServerIcon serverName={"Flappy Bird"} serverImg={flappy} />
                </Tooltip>
                <Tooltip content={"Flappy Bird"}>
                    <ServerIcon serverName={"Flappy Bird"} serverImg={flappy} />
                </Tooltip>
                <Tooltip content={"Flappy Bird"}>
                    <ServerIcon serverName={"Flappy Bird"} serverImg={flappy} />
                </Tooltip>
                <Tooltip content={"Flappy Bird"}>
                    <ServerIcon serverName={"Flappy Bird"} serverImg={flappy} />
                </Tooltip>
                <Tooltip content={"Flappy Bird"}>
                    <ServerIcon serverName={"Flappy Bird"} serverImg={flappy} />
                </Tooltip>
                <Tooltip content={"Flappy Bird"}>
                    <ServerIcon serverName={"Flappy Bird"} serverImg={flappy} />
                </Tooltip>
                <Tooltip content={"Flappy Bird"}>
                    <ServerIcon serverName={"Flappy Bird"} serverImg={flappy} />
                </Tooltip>
                <Tooltip content={"Flappy Bird"}>
                    <ServerIcon serverName={"Flappy Bird"} serverImg={flappy} />
                </Tooltip>
                <Tooltip content={"Flappy Bird"}>
                    <ServerIcon serverName={"Flappy Bird"} serverImg={flappy} />
                </Tooltip>
                <Tooltip content={"Flappy Bird"}>
                    <ServerIcon serverName={"Flappy Bird"} serverImg={flappy} />
                </Tooltip>
                <Tooltip content={"Flappy Bird"}>
                    <ServerIcon serverName={"Flappy Bird"} serverImg={flappy} />
                </Tooltip>

                <div className="aspect-square rounded-lg flex justify-center items-center bg-orange-300">
                    <CompassIcon className="w-full h-full p-2" strokeWidth={1} />
                </div>
            </div>        
        </div>
  )
}

export default Sidebar