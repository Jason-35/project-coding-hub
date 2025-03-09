import Navbar from "../components/Navbar/Navbar"
import HeroBanner from "../components/HeroBanner/HeroBanner"
import ChipBanner from "../components/Banner/ChipBanner"

import { Link } from "react-router-dom"

import Chip from "../components/Chip"
import pair_programming from "../assets/pair_programming.svg"
import code_typing from "../assets/code_typing.svg"
import connect from "../assets/connecting_teams.svg"
import community from "../assets/friends_online.svg"

function LandingPage() {

    return (
    <div>

        <Navbar />  
        <HeroBanner /> 
        <ChipBanner />     
        
{/*
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