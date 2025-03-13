import { Link } from "react-router-dom"
import { useState } from "react"

import { Menu } from "lucide-react"
import MobileMenu from "./MobileMenu"

import Logo from "../Logo/Logo"

function Navbar() {
    const [showMobileNav, setShowMobileNav] = useState<boolean>(false)
    
    return (
        <div className="p-4 flex items-center justify-between font-inter relative md:px-32">
            <Logo />
            <Menu className="hover:cursor-pointer sm:hidden" onClick={() => setShowMobileNav(true)}/>
            {showMobileNav && <MobileMenu setShowMobileNav={setShowMobileNav}/>}
            <nav className="hidden list-none sm:flex sm:w-3/12 sm:justify-around text-2xl md:flex">
                <li>
                    <Link to={""} className="hover:underline">Project</Link>
                </li>
                <li>
                    <Link to={""} className="hover:underline">About</Link>
                </li>
                <li className="border-l-2 border-orange-400"></li>
                <li>
                    <Link to={"login"} className="hover:underline">Sign In</Link>
                </li>
                <li>
                    <Link to={"signup"} className="hover:underline text-orange-400">Join</Link>
                </li>
            </nav>
        </div>
    )
}

export default Navbar