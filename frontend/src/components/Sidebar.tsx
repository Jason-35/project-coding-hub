import { CompassIcon, Plus } from "lucide-react"
import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

import Inbox from "./Inbox/Inbox"
import ServerIcon from "../features/projectServer/component/ServerIcon"
import UserProfile from "./UserProfile/UserProfile"
import CreateServer from "../features/server/component/CreateServer"
import Tooltip from "./Tooltip/Tooltip"
import TooltipContent from "./Tooltip/TooltipContent"
import Divider from "./Divider/Divider"

import { InboxContext } from "../context/InboxContext"

import { Server } from "../types/ServerTypes"
import { getUserServer } from "../httpRequest/UserRequest"

function Sidebar() {
    const inboxItem = useContext(InboxContext)
    const navigate = useNavigate()

    const [showCreateServer, setShowCreateServer] = useState<boolean>(false)
    const [userServer, setUserServer] = useState<Server[]>([])

    const fetchUserServer = async() => {
        const res = await getUserServer()
        setUserServer(res.data)
    }   
    
    useEffect(() => {
        fetchUserServer()
    }, [])


    return (
        <div className={`z-20 fixed w-screen bg-transparent h-screen overflow-y-scroll ${!showCreateServer ? "pointer-events-none" : ""}`}>    

            {inboxItem.showInbox && 
                <div className="absolute top-1/2 left-1/2 w-1/4 h-2/3 -translate-x-1/2 -translate-y-1/2 pointer-events-auto">
                    <Inbox />
                </div>
            }

            {showCreateServer && 
                <CreateServer setShowCreateServer={setShowCreateServer} /> 
            }
            
            <div className="sticky border-r-2 min-h-screen border-black flex flex-col gap-3 w-fit p-4 bg-white pointer-events-auto">
                
                <UserProfile />
                <Divider />

                {userServer.map((server) => (
                    <Tooltip key={server.id} content={server.name}>
                        <ServerIcon serverName={server.name} serverImg={server.img} serverUrl={server.id} />
                    </Tooltip>
                ))}
                
                <Tooltip content={"Create Project"}>
                    <TooltipContent 
                        icon={<Plus className="w-full h-full p-2" strokeWidth={1} />}
                        action={() => setShowCreateServer(true)}/>
                </Tooltip>

                <Tooltip content={"Explore"}>
                    <TooltipContent 
                        icon={<CompassIcon className="w-full h-full p-2" strokeWidth={1} />}
                        action={() => navigate("projectBoard")}/>
                </Tooltip>
                
            </div>  
        </div>
  )
}

export default Sidebar