import { Outlet } from "react-router-dom"
import TextChannel from "../../channels/component/TextChannel"
import Members from "../../serverMember/component/Members"

function ServerPage() {
  return (
    <div className='flex-1 flex'>
        <TextChannel serverName={"bob channel"}/>
        <div className="flex-1 border-l-2 border-r-2"><Outlet /></div>
        <Members />
    </div>
  )
}

export default ServerPage