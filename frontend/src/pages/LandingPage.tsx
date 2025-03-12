import Navbar from "../components/Navbar/Navbar"
import HeroBanner from "../components/HeroBanner/HeroBanner"
import ChipBanner from "../components/Banner/ChipBanner"
import Banner from "../components/Banner/Banner"

import CODE_TYPING from "../assets/code_typing.svg"
import CONNECT from "../assets/connecting_teams.svg"
import COMMUNITY from "../assets/friends_online.svg"

function LandingPage() {
    return (
    <div className="font-inter">
        <Navbar />  
        <HeroBanner /> 
        <ChipBanner />     
        <Banner colored={false} img={CODE_TYPING} reverse={true} heading={"Have Fun!"} content={"It's more fun coding with others Work"} />
        <Banner colored={true} img={CONNECT} reverse={false} heading={"Connect with developers"} content={"Converse with others \n Create new ideas \n Build them!"} />
        <Banner colored={false} img={COMMUNITY} reverse={true} heading={"Create Communities"} content={"Meet like minded individual \n Come together and build \n Learn and advance together!"} />
    </div>
    )
}

export default LandingPage