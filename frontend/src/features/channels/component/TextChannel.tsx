import { ChevronDown, Settings } from "lucide-react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
function TextChannel() {

    const channels = ["Welcome", "Gettoing Started", "General", "Discussion", "Task"]

    const navigate = useNavigate()
    const [showMenu, setShowMenu] = useState(false)

    const switchChannel = (ch: string) => {
        navigate(`${ch}`)
    }

    return (
        <div className="z-10 w-1/6 relative flex flex-col border-black border-2">
                <div className="relative">
                    <div className="p-4 border-b-4 mb-1 flex justify-between hover:cursor-pointer"
                        onClick={() => setShowMenu(!showMenu)}>
                        <span>asd</span>
                        <ChevronDown />
                    </div>
                    {showMenu ? 
                    <div className="absolute bg-white border-4 w-full top-16 rounded-md flex flex-col gap-2 p-2 py-4    ">
                        <div className="border-2 p-1 rounded-md hover:cursor-pointer hover:bg-blue-400 hover:text-white">Create Channel</div>
                        <div className="border-2 p-1 rounded-md hover:cursor-pointer hover:bg-blue-400 hover:text-white">Server Settings</div>
                    </div> 
                    : <></>
                    }
                </div>
            <div className="overflow-scroll flex flex-col gap-2 px-2">
                  {channels.map((ch, index) => (
                      <div key={index} className="border-2 p-2 rounded-md hover:bg-gray-400 hover:cursor-pointer flex justify-between"
                      onClick={() => switchChannel(ch)}>
                        {ch}
                        <Settings />
                      </div>      
                  ))}
            </div>
        </div>
    )
}

export default TextChannel