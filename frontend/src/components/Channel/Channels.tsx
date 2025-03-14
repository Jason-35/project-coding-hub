import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import CreateChannel from "../CreateChannel/CreateChannel"
import { useWebSocket } from "../../features/ws/Ws"
import { getServerChannels } from "../../httpRequest/channelRequest"
import { ChannelType } from "../../types/ChannelTypes"
import ChannelHeader from "../ChannelHeader/ChannelHeader"
import ChannelMenu from "../ChannelMenu/ChannelMenu"
import Channel from "./Channel"

function Channels({serverName} : {serverName: string}) {

    const [channels, setChannels] = useState<ChannelType[]>([])
    const [showMenu, setShowMenu] = useState(false)
    const [showCreateChannel, setShowCreateChannel] = useState(false)
    
    const webSocketClient = useWebSocket()
    const {serverId} = useParams()
    
    const fetchChannel = async() => {
        const serverChannels = await getServerChannels(serverId!)
        setChannels(serverChannels)
    }
    
    useEffect(() => {
        fetchChannel()
        if(webSocketClient) {
            webSocketClient.subscribe(`/topic/create/channel/${serverId}`, (message) => {
                setChannels((prevChannels) => [...prevChannels, JSON.parse(message.body)]);
            })
        }
        return () => webSocketClient?.unsubscribe(`/topic/create/channel/${serverId}`);
    }, [webSocketClient])
    
       
    return (
      
            <div className="z-10 w-1/6 relative flex flex-col border-r-2 border-black">  
                
                <CreateChannel show={showCreateChannel} setShow={setShowCreateChannel} />
                
                <div className="relative">
                    <ChannelHeader action={() => setShowMenu(!showMenu)} serverName={serverName} />

                    {showMenu &&
                        <ChannelMenu action={() => {setShowCreateChannel(true), setShowMenu(false)}} />
                    }
                </div>

                <div className="overflow-scroll flex flex-col gap-2 px-2">
                    {channels.map((ch, index) => (
                        <Channel key={index} channelId={ch.channelId} channelName={ch.channelName} />
                    ))}
                </div>
            </div>
    )
}

export default Channels