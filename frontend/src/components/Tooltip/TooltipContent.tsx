
function TooltipContent({icon, action}: {icon : React.ReactNode, action: () => void}) {
    
    return (
        <div className="aspect-square rounded-lg flex justify-center items-center bg-orange-300 hover:cursor-pointer"
            onClick={action}>
            {icon}
        </div>
  )
}

export default TooltipContent