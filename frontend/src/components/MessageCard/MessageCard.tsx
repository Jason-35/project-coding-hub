
interface MessageCardProps {
    userImg: string,
    message: string,
    scroll?: React.MutableRefObject<HTMLDivElement | null>
    userName: string
}

function MessageCard({userImg, message, scroll, userName} : MessageCardProps) {
    return (
        <div className="p-4 flex hover:bg-blue-300" ref={scroll}> 
            <div className="border-2 border-black rounded-md mr-4 min-w-12 aspect-square max-h-12 flex justify-center items-center">{userImg}</div>
                <div className="px-1">
                    <div>{userName}</div>
                    <div className="text-[14px]">{message}</div>
                </div>
        </div>
    )
}

export default MessageCard