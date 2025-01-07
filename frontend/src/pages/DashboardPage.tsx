import axios from 'axios'
import { useEffect } from 'react'
import { getJwtToken, getUserInfo } from '../features/auth/util/util'
import { useWebSocket } from '../features/ws/Ws'

function DashboardPage() {
    
    const handleClick = () => {
        const token = getJwtToken()
        const config = {
            headers: {
              Authorization: `Bearer ${token}`
            }
        };
        const userId = getUserInfo()?.id
        axios.get(`http://localhost:8080/get/${userId}/mail`, config).then((res) => {
            console.log(res.data)
        })
    }

  return (
    <div>
        dashboard
        <button onClick={handleClick}>Click me!</button>
    </div>
  )
}

export default DashboardPage