import axios from 'axios'
import { useEffect } from 'react'
import { getJwtToken, getUserInfo } from '../features/auth/util/util'
import { useWebSocket } from '../features/ws/Ws'

function DashboardPage() {
    const webSocketClient = useWebSocket()

    useEffect(() => {
        console.log("even ruin?")
        if(webSocketClient) {
            webSocketClient.subscribe(`/topic/reciever`, (message) => {
                console.log("REACH FOR ME")
                console.log(message.body)
            })
        }
        return () => webSocketClient?.unsubscribe(`/topic/reciever`);
    }, [webSocketClient])

    const handleClick = () => {
        // if(webSocketClient) {
        //     webSocketClient.send(`/app/testing`, {}, "pewpew")
        // }
        const token = getJwtToken()
    const config = {
        headers: {
          Authorization: `Bearer ${token}`
        }
    };
        axios.get("http://localhost:8080/server/get/test", config)
    }

  return (
    <div>
        dashboard
        <button onClick={handleClick}>Click me!</button>
    </div>
  )
}

export default DashboardPage