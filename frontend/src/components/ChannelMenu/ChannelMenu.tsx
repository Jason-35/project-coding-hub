interface ChannelMenuProps {
    action: () => void
}

function ChannelMenu({action} : ChannelMenuProps) {
  return (
    <div className="absolute bg-white border-4 w-full top-16 rounded-md flex flex-col gap-2 p-2 py-4    ">
        <div onClick={action} className="border-2 p-1 rounded-md hover:cursor-pointer hover:bg-blue-400 hover:text-white">Create Channel</div>
        <div className="border-2 p-1 rounded-md hover:cursor-pointer hover:bg-blue-400 hover:text-white">Server Settings</div>
    </div>
  )
}

export default ChannelMenu