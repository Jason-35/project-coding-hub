import MemberCard from "../MemberCard/MemberCard"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getServerMembers } from "../../httpRequest/ServerRequest"
import { useWebSocket } from "../../features/ws/Ws"
function Members() {
    const param = useParams()
    const [members, setMembers] = useState<string[]>([])
    
    const fetchMembers = async() => {
        const res = await getServerMembers(param.serverId!);
        setMembers(res);
    }
    
    useEffect(() => {
        fetchMembers()
    }, [])
    
    const webSocketClient = useWebSocket()
    useEffect(() => {
        if(webSocketClient) {
            webSocketClient.subscribe(`/topic/newMember/${param.serverId}`, (message) => {
                setMembers((prevState) => [...prevState, message.body])
            })
        }
        return () => webSocketClient?.unsubscribe(`/topic/newMember/${param.serverId}`);
    }, [webSocketClient])

  return (
    <div className="w-1/6 p-2 font-inter">
        {members.map((usr, index) => (
            <MemberCard key={index} name={usr}/>
        ))}
    </div>
  )
}

export default Members