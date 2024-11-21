import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'

function DashboardPage() {
    useEffect(() => {
        console.log("dashboard rendered!")
    })
  return (
    <div>
        dashboard
    </div>
  )
}

export default DashboardPage