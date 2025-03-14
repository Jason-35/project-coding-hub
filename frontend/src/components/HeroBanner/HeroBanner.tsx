import pair_programming from "../../assets/pair_programming.svg"
import { Link } from "react-router-dom"

function HeroBanner() {
    return (
        <div className="h-[calc(100vh-12vh)] flex flex-col items-center justify-center sm:flex-row-reverse sm:gap-48">
            <div className="aspect-square w-5/6 sm:w-1/2 sm:aspect-auto">
                <img src={pair_programming} alt="" />
            </div>
            <div className="flex justify-center items-center text-center flex-col px-4 gap-16 sm:w-2/4">
                <div className="sm:px-20">
                    <span className=" text-3xl font-semibold sm:text-6xl">Build with <span className="text-orange-400">Communities!</span></span>
                    <br />
                    <br />
                    <span className="border-2 sm:text-2xl flex text-start">Project Coding Hub is the right place to find the right project to build</span>
                </div>
                
                <Link to={"signup"} className="bg-orange-300 w-full p-2 rounded-full sm:w-3/6 border-[1px] border-black">
                    <button className="text-2xl" >Join Now</button>
                </Link>
            </div>
        </div>
    )
}

export default HeroBanner