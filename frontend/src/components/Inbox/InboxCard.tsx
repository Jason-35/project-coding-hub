import axios from "axios"
import { getJwtToken, getUserInfo } from "../../auth/util/util"
import { useWebSocket } from "../../context/Ws"

type InboxCardType = {
    senderId: number | undefined,
    sender: string | undefined,
    project: string | undefined,
    projectId: string | undefined,
    date: string | undefined,
    mailType: string | undefined,
    senderName: string | undefined,
    serverName: string | undefined,
    response: string | undefined
}

type Mail = {
    mail: InboxCardType
}

function InboxCard({mail} : Mail) {
    const webSocketClient = useWebSocket()

    // The axios post tells server to let the user join if the user accepts the join request 
    // websocket is just to dynamically update inbox for accept or decline
    // TODO: Redundant and need refactoring
    const handleResponse = (response: string) => {
        if (response === "accept") {
            const token = getJwtToken()
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            };
            const payload = {
                userId: mail.senderId,
                serverId: mail.projectId
            }
            axios.post(`http://localhost:8080/server/join`, payload, config).then((res) => {
                // console.log(res.data)
            })
        }

        if(webSocketClient) {
            console.log(mail.senderId)
            const userInfo = getUserInfo()
            const payload = {
                 senderId: userInfo?.id,
                 recieverId: mail.senderId,
                 serverName: mail.project,
                 mailType: "response",
                 response: response,
            }
            webSocketClient.send(`/app/request/response`, {}, JSON.stringify(payload))
            if (response === "accept") {
                webSocketClient.send(`/app/testing`, {}, "farq")
            }
        }
    }

    return (
    <div>
        <div className="flex p-2 gap-2 items-center">
            <div className="self-start">
                <div className="border-2 bg-orange-500 text-white border-black rounded-lg aspect-square w-14 h-14 flex justify-center items-center">
                    {mail.sender ? mail.sender.charAt(0) : mail.senderName?.charAt(0)}
                </div>
            </div>
            <div className="flex flex-col gap-2 flex-1">
                {mail.mailType === "response" ? 
                    <div>
                        {mail.senderName} {mail.response} your request to join{mail.serverName}
                    </div> : 
                    <div>
                        {mail.sender} invites you to the {mail.project} project
                    </div>
                }
                <div className="italic text-[12px]">
                    {mail.date}
                </div>
                {mail.mailType !== "response" && 
                <div className="flex justify-start gap-2">
                    <button 
                        className="border-2 border-green-200 p-1 rounded-md hover:cursor-pointer text-sm hover:bg-green-400"
                        onClick={() => handleResponse("accept")}>
                            Accept
                    </button>
                    <button 
                        className="border-2 border-red-200 p-1 rounded-md hover:cursor-pointer text-sm hover:bg-red-400"
                        onClick={() => handleResponse("decline")}>
                            Decline
                    </button>
                </div>}
            </div>
        </div>
    </div> 
  )
}

export default InboxCard