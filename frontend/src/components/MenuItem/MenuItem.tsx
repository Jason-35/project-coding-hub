function MenuItem({icon, text, action} : {icon: React.ReactNode, text: string, action?: () => void}) {
    return (
        <div className="flex gap-4 hover:cursor-pointer hover:bg-black hover:text-white hover:rounded-md p-2"
            onClick={action}>
            {icon}
            <div>{text}</div>
        </div>
    )
}

export default MenuItem