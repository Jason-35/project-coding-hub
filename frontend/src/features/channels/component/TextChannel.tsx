import { ChevronDown, Settings } from "lucide-react"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import CreateChannel from "./CreateChannel"
import { useWebSocket } from "../../ws/Ws"
function TextChannel({serverName} : {serverName: string}) {

    const [channels, setChannels] = useState(["Welcome", "Getting Started", "General", "Discussion", "Task"])

    const webSocketClient = useWebSocket()
    const {serverId} = useParams()

    useEffect(() => {
        if(webSocketClient) {
            webSocketClient.subscribe(`/topic/create/channel/${serverId}`, (message) => {
                setChannels((prevChannels) => [...prevChannels, message.body]);
            })
        }
        return () => webSocketClient?.unsubscribe(`/topic/create/channel/${serverId}`);
    }, [webSocketClient])
    
    const navigate = useNavigate()
    const [showMenu, setShowMenu] = useState(false)
    const [showCreateCh, setShowCreateCh] = useState(false)

    const switchChannel = (ch: string) => {
        navigate(`${ch}`)
    }
       
    return (
      
            <div className="z-10 w-1/6 relative flex flex-col border-black border-2">  
                 <CreateChannel show={showCreateCh} setShow={setShowCreateCh} />
                <div className="relative">
                    <div className="p-4 border-b-4 mb-1 flex justify-between hover:cursor-pointer"
                        onClick={() => setShowMenu(!showMenu)}>
                        <span className="truncate">{serverName}</span>
                        <ChevronDown />
                    </div>
                    {showMenu ? 
                    <div className="absolute bg-white border-4 w-full top-16 rounded-md flex flex-col gap-2 p-2 py-4    ">
                        <div onClick={() => setShowCreateCh(true)} className="border-2 p-1 rounded-md hover:cursor-pointer hover:bg-blue-400 hover:text-white">Create Channel</div>
                        <div className="border-2 p-1 rounded-md hover:cursor-pointer hover:bg-blue-400 hover:text-white">Server Settings</div>
                    </div> 
                    : <></>
                    }
                </div>
                <div className="overflow-scroll flex flex-col gap-2 px-2">
                  {channels.map((ch, index) => (
                      <div key={index} className="border-2 p-2 rounded-md hover:bg-gray-400 hover:cursor-pointer flex justify-between"
                      onClick={() => switchChannel(ch)}>
                        {ch}
                        <Settings />
                      </div>      
                  ))}
                </div>
            </div>
    )
}

export default TextChannel