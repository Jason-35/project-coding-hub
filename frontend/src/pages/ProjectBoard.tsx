import Post from "../features/projectServer/component/Post"
import { useEffect, useState } from "react"
import { Server } from "../types/ServerTypes"
import { getAllServers } from "../httpRequest/ServerRequest"

function ProjectBoard() {
    
    const [servers, setServer] = useState<Server[]>([])

    const fetchAllServer = async() => {
        const res = await getAllServers()
        setServer(res.data)
    }

    useEffect(() => {
        fetchAllServer()
    }, [])

  return (
    <div className="flex-1 flex flex-col overflow-scroll font-inter">

        <div className="border-b-2 border-black mb-8">
            <div className="h-[124px] w-fit ml-32 text-5xl font-semibold flex items-center ">
                FIND THE RIGHT PROJECT
            </div>
        </div>
        
        <div className="p-10 flex flex-wrap gap-16">
            {
                servers.map((server) => (
                    <Post 
                        key={server.id} 
                        id={server.id}
                        title={server.name} 
                        description={server.description} 
                        icon={server.img} 
                        open={!server.status} 
                        genre={server.tags} 
                        members={3} />
                ))
            }
        </div>
    </div>
  )
}

export default ProjectBoard