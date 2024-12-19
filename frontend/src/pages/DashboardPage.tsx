import axios from 'axios'
import { useEffect } from 'react'
import { getJwtToken } from '../features/auth/util/util'
import { useWebSocket } from '../features/ws/Ws'

function DashboardPage() {
    const webSocketClient = useWebSocket();
    
    useEffect(() => {
        if(webSocketClient) {
            webSocketClient.subscribe("/topic/greeting", (message) => {
                console.log("new message", message.body)
            })
        }
    }, [webSocketClient])

    const handleClick = () => {
        const token = getJwtToken()
        const config = {
            headers: {
              Authorization: `Bearer ${token}`
            }
        };

        webSocketClient?.send("/app/hello", config, "Hello from client")
    }

  return (
    <div>
        dashboard
        <button onClick={handleClick}>Click me!</button>
    </div>
  )
}

export default DashboardPage