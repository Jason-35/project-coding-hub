import Post from "../features/projectServer/component/Post"
import flappy from "../assets/flappy.png"
import kitty from "../assets/kitty.png"
import jumpKing from "../assets/jumpking.jpg"

function ProjectBoard() {
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
            <Post title="Spotify" description={desc} icon={flappy} open={true} genre={genre} members={3}/>
            <Post title="Super Cat" description={desc} icon={kitty} open={true} genre={genre} members={3}/>
            <Post title="Jump King" description={desc} icon={jumpKing} open={false} genre={genre} members={3}/>
            <Post title="Calculator" description={desc} open={true} genre={genre} members={3}/>
        </div>
    </div>
  )
}

export default ProjectBoard