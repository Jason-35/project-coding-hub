import { Outlet } from "react-router-dom"
import TextChannel from "../../channels/component/TextChannel"

function ServerPage() {
  return (
    <div className='flex-1 flex'>
        <TextChannel />
        <div className="flex-1 border-l-2 border-r-2"><Outlet /></div>
        <div className="w-1/6">Members</div>
    </div>
  )
}

export default ServerPage