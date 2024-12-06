import axios from 'axios'
import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { getJwtToken } from '../features/auth/util/util'

function DashboardPage() {
    useEffect(() => {
        console.log("dashboard rendered!")
    })

    const test = () => {
        const token = getJwtToken()
        const config = {
            headers: {
              Authorization: `Bearer ${token}`
            }
        };
        axios.get("http://localhost:8080/home", config).then((res) => {
            console.log(res.data)
        })
    }
  return (
    <div>
        dashboard
        <button className='border-4' onClick={test}>btn</button>
    </div>
  )
}

export default DashboardPage