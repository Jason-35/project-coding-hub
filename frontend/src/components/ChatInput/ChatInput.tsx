import { TriangleIcon } from "lucide-react"
import { useForm } from "react-hook-form"
import { ChatForm } from "../../types/ChatType"
import { useWebSocket } from "../../context/Ws"
import { getUserInfo } from "../../auth/util/util"
import { useParams } from "react-router-dom"

function ChatInput() {
    const { register, handleSubmit, reset } = useForm<ChatForm>()
    const webSocketClient = useWebSocket()
    const param = useParams()
    const formSubmit = (data: ChatForm) => {
        if (webSocketClient) {
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
        <form className='h-14 flex gap-2 p-2 border-t-2 border-black' onSubmit={handleSubmit(formSubmit)}>
            <input {...register("message")} className='w-full h-full border-[1px] rounded-md pl-4 whitespace-nowrap outline-none' placeholder='message' />
            <div className="p-3 rotate-90">
                <TriangleIcon className="hover:cursor-pointer" strokeWidth={1} onClick={handleSubmit(formSubmit)} />
            </div>
        </form>
    )
}

export default ChatInput