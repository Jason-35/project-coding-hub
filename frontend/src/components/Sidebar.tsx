import { CompassIcon } from "lucide-react"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import UserProfile from "../features/user/component/UserProfile"
import Inbox from "../features/user/component/Inbox"
import ServerIcon from "../features/projectServer/component/ServerIcon"
import Tooltip from "./Tooltip"
import UserMenu from "../features/user/component/UserMenu"
import CreateServer from "../features/server/component/CreateServer"
import axios from "axios"
import { getJwtToken, getUserInfo } from "../features/auth/util/util"
import { useWebSocket } from "../features/ws/Ws"

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
    const [showInbox, setShowInbox] = useState<boolean>(false)
    const [showCreateServer, setShowCreateServer] = useState<boolean>(false)
    const [userServer, setUserServer] = useState<Server[]>([])
    const [unread, setUnread] = useState(2)

    useEffect(() => {
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

    const webSocketClient = useWebSocket()
    useEffect(() => {
        if(webSocketClient) {
            const userId = getUserInfo()?.id
            webSocketClient.subscribe(`/topic/notification/${userId}`, (message) => {
                console.log("new message: ", message.body, "from" + `/topic/notification/${userId}`)
            })
        }
        return () => webSocketClient?.unsubscribe("/topic/notification/abc");
    }, [webSocketClient])

    return (
        <div className={`z-20 fixed w-screen bg-transparent h-screen overflow-y-scroll ${!showCreateServer ? "pointer-events-none" : ""}`}>    
            {showInbox && 
            <div className="absolute top-1/2 left-1/2 w-1/4 h-2/3 -translate-x-1/2 -translate-y-1/2 pointer-events-auto">
                <Inbox setShowInbox={setShowInbox} />
            </div>}
            <div className="sticky border-r-2 min-h-screen border-blue-400 flex flex-col gap-3 w-fit p-4 bg-white pointer-events-auto">
                <div>
                    <UserMenu unread={unread} showMenu={showMenu} setShowMenu={setShowMenu} setShowCreateServer={setShowCreateServer} setShowInbox={setShowInbox} />
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