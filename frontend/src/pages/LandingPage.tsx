import Navbar from "../components/Navbar/Navbar"
import HeroBanner from "../components/HeroBanner/HeroBanner"

import { Link } from "react-router-dom"

import Chip from "../components/Chip"
import pair_programming from "../assets/pair_programming.svg"
import code_typing from "../assets/code_typing.svg"
import connect from "../assets/connecting_teams.svg"
import community from "../assets/friends_online.svg"

function LandingPage() {
    const genre: string[] = ["python", "java", "go", "javascript", "react", "vue", "angular", "rust", "ruby","c", "php", "postgres", "mongodb", "c#", "react", "springboot", "next.js", "c++", "Show More"]

    return (
    <div>

        <Navbar />  
        <HeroBanner />      

         {/* <div className="flex justify-around items-center mb-52">
            <div>
                <div className="text-[68px] leading-snug mb-8">
                    NO MORE 
                    <br/>
                    <span className="text-blue-600">SINGLE PLAYER</span> 
                    <br/> 
                    TIME FOR <span className="text-orange-400">MULTIPLAYER</span>!
                </div>
                
                <div>
                    <div className="text-[24px] border-2 border-black w-2/4 text-center rounded-lg hover:bg-blue-600 hover:text-white hover:cursor-pointer hover:border-blue-600 mb-2">
                        <Link to={"login"}>Sign In</Link>
                    </div>
                    <div className="text-[20px]">New to project coding hub? <Link className="hover:underline text-orange-500" to={"signup"}>Join Here</Link></div>    
                </div>
            </div>
            <div className="w-1/3">
                <img src={pair_programming} alt="" />
            </div>
        </div> */}
{/*
        <br />
        
        <div className="flex justify-around h-60 bg-orange-300 items-center p-48">
            <div className="text-[36px]">
                <div className="leading-snug">
                    Find the project genre
                    <br/>
                    that interests you!
                </div>
                <div className="text-[24px] leading-loose">
                    Many projects with many tech <br/>
                    Search for projects you want to work on!
                </div>
            </div>
            <div>
            </div>
            <div className="w-2/4">
                {genre.map((genre, index) => (
                    <Chip key={index} label={genre} border_size="border-none"/>
                ))}
            </div>
        </div>

        <div className="flex justify-around p-24 items-center">
            <div className="w-1/4">
                <img src={connect} alt="" />
            </div>
            <div className="text-[40px] leading-loose">
                Connect with developers
                <div className="text-[24px] leading-snug">
                    Converse with others 
                    <br/> 
                    Create new ideas
                    <br />
                    Build them!
                </div>
            </div>
        </div>

        <div className="flex justify-around p-24 items-center bg-orange-300">
            <div className="text-[40px] leading-loose">
                Have Fun!
                <div className="text-[24px] leading-snug">
                    It's more fun coding with others
                    <br />
                    Work together to make something great!
                </div>
            </div>
            <div className="w-1/3">
                <img src={code_typing} alt="" />
            </div>
        </div>
        <div className="flex justify-around p-24 items-center">
            <div className="w-1/3">
                <img src={community} alt="" />
            </div>
            <div className="text-[40px] leading-loose">
                Create Communities
                <br/>
                <div className="text-[24px] leading-snug">
                    Meet like minded individual
                    <br/>
                    Come together and build
                    <br/>
                    Learn and advance together!
                </div>
            </div>
        </div> */}
    </div>
    )
}

export default LandingPage