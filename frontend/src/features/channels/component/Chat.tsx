import { useParams } from "react-router-dom"
import { TriangleIcon } from "lucide-react"
import { useForm } from "react-hook-form"
import { useWebSocket } from "../../ws/Ws"
import { getUserInfo } from "../../auth/util/util"
import { useEffect } from "react"
function Chat() {
    type ChatForm = {
        message: string,
    }

    const param = useParams()
    const webSocketClient = useWebSocket()
    const { register, handleSubmit, reset, formState: { errors } } = useForm<ChatForm>()
    useEffect(() => {
        if(webSocketClient) {
            webSocketClient.subscribe(`/topic/channel/${param.channelId}`, (message) => {
                console.log(message.body)
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
        <div className=' border-green-500 flex-1'>
            <div className="p-4 flex hover:bg-blue-300 "> 
                <div className="border-2 mr-4 min-w-12 aspect-square max-h-12 flex justify-center items-center">P</div>
                <div className="px-1">
                    <div>Guest1</div>
                    <div className="text-[14px]">Hello this is a big project that i would like contribute to</div>
                </div>
            </div>
            <div className="p-4 flex hover:bg-blue-300"> 
                <div className="border-2 mr-4 min-w-12 aspect-square max-h-12 flex justify-center items-center">P</div>
                <div className="px-1">
                    <div>Guest2</div>
                    <div className="text-[14px]">poof</div>
                </div>
            </div>
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