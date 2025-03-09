import LOGO from "../assets/logo.png"

function Logo() {
  return (
    <div className="flex items-center font-inter font-semibold text-2xl sm:text-4xl">
        <img src={LOGO} className="w-16 sm:w-24 hover:cursor-pointer" />
        <p className="hidden hover:cursor-pointer md:block">
            Code <span className="text-orange-400">Project</span> Hub
        </p>
    </div>
  )
}

export default Logo