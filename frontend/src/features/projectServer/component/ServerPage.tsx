import { Outlet, useParams } from "react-router-dom"
import TextChannel from "../../channels/component/TextChannel"
import Members from "../../serverMember/component/Members"
import { useEffect, useState } from "react"
import { getServerName } from "../../../httpRequest/ServerRequest"

function ServerPage() {
    const param = useParams()
    const [serverName, setServerName] = useState<string>("")

    const fetchServerName = async() => {
        const name = await getServerName(param.serverId!)
        setServerName(name)
    }

    useEffect(() => {
       fetchServerName() 
    }, [])

    return (
        <div className='flex-1 flex'>
            <TextChannel serverName={serverName}/>
            <div className="flex-1 border-l-2 border-r-2"><Outlet /></div>
            <Members />
        </div>
  )
}

export default ServerPage