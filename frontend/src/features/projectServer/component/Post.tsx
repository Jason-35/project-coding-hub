import Chip from "../../../components/Chip"
import { getUserInfo } from "../../auth/util/util";
import { useWebSocket } from "../../ws/Ws";

type PostProps = {
    title: string,
    id: string,
    genre: string[],
    description: string,
    icon?: string,
    open: boolean,
    members: number,
}

enum Access {
    Public,
    Private
}

function Post({title, genre, description, icon, open, members, id} : PostProps) {

    const webSocketClient = useWebSocket();
    const handleJoin = (accessType: Access) => {
        const userInfo = getUserInfo()
        
        if(webSocketClient) {
            if (accessType == Access.Private) {
                webSocketClient.send(`/app/request/${id}`, {}, JSON.stringify(userInfo))
            } else {
                webSocketClient.send(`/app/request/${id}`, {}, JSON.stringify(userInfo))
            }
        }
    }

    return (
    <div className="w-96 rounded-lg border-2 p-2 h-max-92 scrollbar-hidden">
        <div className="flex border-b-4 border-orange-400 pb-1 bg-white rounded-t-full mb-2">

            {icon ? 
            <img src={icon} className="rounded-lg aspect-square max-w-[72px] max-h-[72px]" /> : 
            <div className="bg-blue-400 w-[72px] h-[72px] aspect-square rounded-lg flex justify-center items-center text-[32px]">
                {title.charAt(0)}
            </div>}

            <div className="flex flex-1 px-2 justify-between">
                <div>
                    <div className="font-bold truncate w-52 ">{title}</div>
                    <div>
                        <span className={`px-2 rounded-sm ${open ? "bg-green-400" : "bg-red-400"} `}>
                            {open ? "public" : "private"}
                        </span>
                    </div>

                    <div className="">
                        <span className="border-[1px] border-black px-1 rounded-md">{members} members</span>
                    </div>

                </div>

                <div className="flex justify-center items-center">
                    <div className="hover:cursor-pointer hover:bg-blue-500 py-1 px-2 rounded-md bg-blue-400 text-white"
                        onClick={() => { open ? handleJoin(Access.Public) : handleJoin(Access.Private) }}>
                        {open ? "Join" : "Request"}
                    </div>
                </div>
                
            </div>
        </div>

        {genre.length > 0 ? 
        <div className="mb-2 max-h-32 min-h-30 overflow-scroll">
            {genre.map((genre, index) => (
                <Chip key={index} label={genre} padding="p-1" shape="rounded-md"/>
            ))}
        </div>
        : <></>}

        <div className="overflow-scroll max-h-36 scrollbar-hidden">
            {description}
        </div>
    </div>
  )
}

export default Post