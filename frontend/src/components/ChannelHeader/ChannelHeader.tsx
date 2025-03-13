import { ChevronDown } from "lucide-react"

interface ChannelHeaderProps {
    action: () => void,
    serverName: string
}

function ChannelHeader({action, serverName}: ChannelHeaderProps) {
  return (
    <div className="p-4 border-b-2 border-black mb-1 flex justify-between hover:cursor-pointer"
        onClick={action}>
        <span className="truncate">{serverName}</span>
        <ChevronDown />
    </div>
  )
}

export default ChannelHeader