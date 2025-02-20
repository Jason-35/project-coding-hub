import { useParams } from "react-router-dom"
import { TriangleIcon } from "lucide-react"
import { useForm } from "react-hook-form"
import { useWebSocket } from "../../ws/Ws"
import { getUserInfo } from "../../auth/util/util"
import { useEffect, useRef, useState } from "react"
import { getChannelMessages } from "../../../httpRequest/channelRequest"
function Chat() {

    type Message = {
        messageId: number
        message: string,
        userImg: string | null,
        userName: string
    }

    type ChatForm = {
        message: string,
    }

    const [messages, setMessages] = useState<Message[]>([])
    const dummy = useRef<HTMLDivElement | null>(null);
    const param = useParams()
    const webSocketClient = useWebSocket()
    const { register, handleSubmit, reset, formState: { errors } } = useForm<ChatForm>()

    const fetchMessage = async() => {
        let msgs = await getChannelMessages(param.channelId!)
        console.log("got message ", msgs)
        setMessages(msgs);
    }

    useEffect(() => {
        fetchMessage()
        console.log("fetched!")
    }, [param.channelId])

    useEffect(() => {
        dummy.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages])

    useEffect(() => {
        if(webSocketClient) {
            webSocketClient.subscribe(`/topic/channel/${param.channelId}`, (message) => {
                console.log(message.body)
                setMessages((prevState) => [...prevState, JSON.parse(message.body)])
            })
        }
        return () => webSocketClient?.unsubscribe(`/topic/channel/${param.channelId}`);
    }, [webSocketClient])

    const formSubmit = (data: ChatForm) => {
        if (webSocketClient) {
            console.log("sending!")
            const usr = getUserInfo()
            const body = {
                message: data.message,
                channelId: param.channelId,
                userId: usr!.id
            }
            webSocketClient.send(`/app/message/channel/${param.channelId}`, {}, JSON.stringify(body))
        }
        reset()        
    }
    

    return (
    <div className='flex flex-col h-screen'>
        <div className='p-4 border-b-2'>{param.channelId}</div>
        <div className=' border-green-500 flex-1 overflow-scroll'>

            {messages.map((msg) => (
            <div key={msg.messageId} className="p-4 flex hover:bg-blue-300" ref={dummy}> 
                <div className="border-2 mr-4 min-w-12 aspect-square max-h-12 flex justify-center items-center">{msg.userName.charAt(0)}</div>
                <div className="px-1">
                    <div>{msg.userName.charAt(0)}</div>
                    <div className="text-[14px]">{msg.message}</div>
                </div>
            </div>
            ))}
 
        </div>
        <form className='h-14 flex border-t-4' onSubmit={handleSubmit(formSubmit)}>
            <input {...register("message")} className='w-full h-full pl-4 whitespace-nowrap' placeholder='message' />
            <div className="p-3 rotate-90">
                <TriangleIcon className="hover:cursor-pointer" onClick={handleSubmit(formSubmit)} />
            </div>
        </form>
    </div>
  )
}

export default Chat