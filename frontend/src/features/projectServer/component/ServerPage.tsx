import { Outlet } from "react-router-dom"
import TextChannel from "../../channels/component/TextChannel"

function ServerPage() {
  return (
    <div className='flex-1 flex'>
        <TextChannel />
        <div className="border-4 flex-1"><Outlet /></div>
        <div className="border-4 w-1/6">Members</div>
    </div>
  )
}

export default ServerPage