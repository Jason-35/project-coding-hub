import { Menu } from "lucide-react"

function Logo() {
  return (
    <div className="font-inter font-semibold text-2xl flex justify-between items-center p-4 sm:text-4xl">
        <p className="hover:cursor-pointer">
            Code <span className="text-orange-400">Project</span> Hub
        </p>
        <Menu className="sm:hidden" />
    </div>
  )
}

export default Logo