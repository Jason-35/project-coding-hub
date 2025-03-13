import { Settings } from "lucide-react"
import { useNavigate } from "react-router-dom"

interface ChannelProps {
    channelId: string,
    channelName: string
}

function Channel({channelName, channelId} : ChannelProps) {
    const navigate = useNavigate()
    const switchChannel = (ch: string) => {
        navigate(`${ch}`)
    }
    return (
        <div className="border-2 p-2 rounded-md hover:bg-gray-400 hover:cursor-pointer flex justify-between"
            onClick={() => switchChannel(channelId)}>
            {channelName}
            <Settings />
        </div>  
    )
}

export default Channel