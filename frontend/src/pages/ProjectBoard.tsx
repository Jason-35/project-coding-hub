import Post from "../features/projectServer/component/Post"
import kitty from "../assets/flappy.png"
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
        <div className="p-4 flex flex-wrap gap-16 border-4 justify-center">
            <Post title="Spotify" description={desc} icon={kitty} open={true} genre={genre}/>
        </div>
    </div>
  )
}

export default ProjectBoard