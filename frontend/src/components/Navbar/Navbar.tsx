import { Link } from "react-router-dom"
import Logo from "../../components/Logo"

function Navbar() {
    return (
        // <div className="flex justify-around py-4 px-2 mb-52 border-2">
        //     <Logo />
        //     <nav className="flex list-none w-1/5 justify-around text-[20px] items-center py-4">
        //         <li>Projects</li>
        //         <li>About</li>
        //         <li className="border-2 h-full border-orange-400"></li>
        //         <li>
        //             <Link to={"signup"} className="hover:underline">Join</Link>
        //         </li>
        //         <li>
        //             <Link to={"login"} className="hover:underline text-orange-400">Sign In</Link>
        //         </li>
        //     </nav>
        // </div>
        <div className="">
            <Logo />
            <nav className="">
                <li>Projects</li>
                <li>About</li>
                <li className=""></li>
                <li>
                    <Link to={"signup"} className="hover:underline">Join</Link>
                </li>
                <li>
                    <Link to={"login"} className="hover:underline text-orange-400">Sign In</Link>
                </li>
            </nav>
        </div>
    )
}

export default Navbar