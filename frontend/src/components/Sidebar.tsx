import { CompassIcon } from "lucide-react"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import UserProfile from "../features/user/component/UserProfile"
import ServerIcon from "../features/projectServer/component/ServerIcon"
import kitty from "../assets/kitty.png"
import flappy from "../assets/flappy.png"
import Tooltip from "./Tooltip"
import UserMenu from "../features/user/component/UserMenu"
import CreateServer from "../features/server/component/CreateServer"
import axios from "axios"
import { getJwtToken, getUserInfo } from "../features/auth/util/util"

function Sidebar() {
    type Server = {
        id: string,
        img: string,
        name: string,
        tags: string[],
        status: boolean,
        description: string
    }
    const navigate = useNavigate()
    const [showMenu, setShowMenu] = useState<boolean>(false)
    const [showCreateServer, setShowCreateServer] = useState<boolean>(false)
    const [userServer, setUserServer] = useState<Server[]>([])

    useEffect(() => {
        console.log("??")
        const token = getJwtToken()
        const userId = getUserInfo()?.id
        const config = {
            headers: {
              Authorization: `Bearer ${token}`
            }
        };
        axios.get(`http://localhost:8080/server/get/${userId}`, config).then((res) => {
            setUserServer(res.data)
        })
    }, [])

    return (
        <div className={`z-20 fixed w-screen bg-transparent h-screen overflow-y-scroll ${!showCreateServer ? "pointer-events-none" : ""}`}>
    
            <div className="sticky border-r-2 min-h-screen border-blue-400 flex flex-col gap-3 w-fit p-4 bg-white pointer-events-auto">
                <div>
                    <UserMenu showMenu={showMenu} setShowMenu={setShowMenu} setShowCreateServer={setShowCreateServer} />
                    <div className="hover:cursor-pointer" onClick={() => setShowMenu(!showMenu)}>
                        <UserProfile />
                    </div>
                </div>
                <div className="border-[1px] border-black" />

                {userServer.map((server) => (
                    <Tooltip key={server.id} content={server.name}>
                            <ServerIcon serverName={server.name} serverImg={server.img} serverUrl={server.id} />
                    </Tooltip>
                ))}

                <Tooltip content={"Explore"}>
                    <div onClick={() => navigate("projectBoard")} className="aspect-square rounded-lg flex justify-center items-center bg-orange-300 hover:cursor-pointer">
                        <CompassIcon className="w-full h-full p-2" strokeWidth={1} />
                    </div>
                </Tooltip>
            
            </div>    
                {showCreateServer && <CreateServer setShowCreateServer={setShowCreateServer} /> }
        </div>
  )
}

export default Sidebar