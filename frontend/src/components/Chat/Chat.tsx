import { useParams } from "react-router-dom"
import { useWebSocket } from "../../features/ws/Ws"
import { useEffect, useRef, useState } from "react"
import { getChannelMessages } from "../../httpRequest/channelRequest"
import { Message } from "../../types/ChatType"
import ChatInput from "../ChatInput/ChatInput"
import MessageCard from "../MessageCard/MessageCard"

function Chat() {

    const [messages, setMessages] = useState<Message[]>([])
    const scrollTo = useRef<HTMLDivElement | null>(null);
    const param = useParams()
    const webSocketClient = useWebSocket()

    const fetchMessage = async() => {
        let msgs = await getChannelMessages(param.channelId!)
        setMessages(msgs);
    }

    useEffect(() => {
        fetchMessage()
    }, [param.channelId])

    useEffect(() => {
        scrollTo.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages])

    useEffect(() => {
        if(webSocketClient) {
            webSocketClient.subscribe(`/topic/channel/${param.channelId}`, (message) => {
                setMessages((prevState) => [...prevState, JSON.parse(message.body)])
            })
        }
        return () => webSocketClient?.unsubscribe(`/topic/channel/${param.channelId}`);
    }, [webSocketClient])

    return (
    <div className='flex flex-col h-screen border-r-2 border-black font-inter'>
        <div className='p-4 border-b-2 border-black'>{param.channelId}</div>
        
        <div className='flex-1 overflow-scroll'>

            {messages.map((msg) => (
                <MessageCard scroll={scrollTo} message={msg.message} userImg={msg.userName.charAt(0)} userName={msg.userName} />
            ))}

        </div>

        <ChatInput />
    </div>
  )
}

export default Chat