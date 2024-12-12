import Post from "../features/projectServer/component/Post"
import flappy from "../assets/flappy.png"
import kitty from "../assets/kitty.png"
import jumpKing from "../assets/jumpking.jpg"
import { useEffect, useState } from "react"
import axios from "axios"
import { getJwtToken } from "../features/auth/util/util"

function ProjectBoard() {
    type Server = {
        id: string,
        img: string,
        name: string,
        tags: string[],
        status: boolean,
        description: string
    }
    const [servers, setServer] = useState<Server[]>([])
    useEffect(() => {
        const token = getJwtToken()
        const config = {
            headers: {
              Authorization: `Bearer ${token}`
            }
        };
        axios.get("http://localhost:8080/server/get/all", config).then((res) => {
            console.log(res.data)
            setServer(res.data)
        })
    }, [])

    let desc = "Creating spotify clone lf people who knows how to code the backend and ux designer for frontend. prefer beginner level coders. Experts are welcome to join. Mentors are welcome to help. Looking for 4 more members to start off this project. This is an open group for anyone"
    let genre = ["springboot", "react", "postgres", "html", "css"]
  return (
    <div className="flex-1 flex flex-col overflow-scroll ">
        <div className="border-b-2 border-black mb-8">
            <div className="h-[124px] w-fit ml-32 text-[48px] flex items-center ">
                Project
                Postings
            </div>
        </div>
        <div className="p-10 flex flex-wrap gap-16">
            {
                servers.map((server) => (
                    <Post 
                        key={server.id} 
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