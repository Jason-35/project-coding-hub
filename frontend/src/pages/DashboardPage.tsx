import axios from 'axios'
import { useEffect } from 'react'
import { getJwtToken, getUserInfo } from '../features/auth/util/util'
import { useWebSocket } from '../features/ws/Ws'

function DashboardPage() {
    const webSocketClient = useWebSocket()
    const handleClick = () => {
        // const token = getJwtToken()
        // const config = {
        //     headers: {
        //       Authorization: `Bearer ${token}`
        //     }
        // };
        // const userId = getUserInfo()?.id
        // axios.get(`http://localhost:8080/server/testing`, config).then((res) => {
        //     console.log(res.data)
        // })

        const userInfo = getUserInfo()
        if(webSocketClient) {
            console.log("gogogo")
            const userInfo = getUserInfo()
            const payload = {
                 senderId: userInfo?.id,
                 recieverId: 2,
                 serverName: "fawl",
                 mailType: "response",
                 response: "accept",
            }
            webSocketClient.send(`/app/request/response`, {}, JSON.stringify(payload))
        }
    }

  return (
    <div>
        dashboard
        <button onClick={handleClick}>Click me!</button>
    </div>
  )
}

export default DashboardPage