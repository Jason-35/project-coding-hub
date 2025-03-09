import Logo from "../Logo"
import { X } from "lucide-react"
import { Link } from "react-router-dom"

function MobileNav({setShowMobileNav} : { setShowMobileNav: React.Dispatch<React.SetStateAction<boolean>> }) {
  return (
    <div className="fixed right-0 top-0 w-screen bg-orange-300 h-screen">
        <div className="flex items-center justify-between p-4">
            <Logo />
            <button 
                className="hover:bg-slate-300 rounded-md aspect-square w-10 flex justify-center items-center"
                onClick={() => setShowMobileNav(false)}>
                    <X />
            </button>
        </div>
        <nav className="flex flex-col gap-4 px-4 list-none text-white">
            <li className="border-b-2 border-white font-medium text-2xl p-4 hover:cursor-pointer">Projects</li>
            <li className="border-b-2 border-white font-medium text-2xl p-4 hover:cursor-pointer">About</li>
            <li className="border-b-2 border-white font-medium text-2xl p-4 hover:cursor-pointer">
                <Link to={"login"}>Sign In</Link>
            </li>
            <li className="border-b-2 border-white font-medium text-2xl p-4 hover:cursor-pointer">
                <Link to={"signup"}>Join</Link>
            </li>
        </nav>
    </div>
  )
}

export default MobileNav