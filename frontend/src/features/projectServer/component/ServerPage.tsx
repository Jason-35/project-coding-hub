import { Outlet } from "react-router-dom"
import TextChannel from "../../channels/component/TextChannel"
import Members from "../../serverMember/component/Members"
import CreateChannel from "../../channels/component/CreateChannel"

function ServerPage() {
  return (
    <div className='flex-1 flex'>
        <CreateChannel />        
        <TextChannel />
        <div className="flex-1 border-l-2 border-r-2"><Outlet /></div>
        <Members />
    </div>
  )
}

export default ServerPage