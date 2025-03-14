import { XIcon } from "lucide-react"

function CreateServerHeader({ setShowCreateServer }: {setShowCreateServer:React.Dispatch<React.SetStateAction<boolean>>}) {
    return (
    <div className="flex items-center justify-center w-full">
        <div className="text-3xl font-semibold">Customize Your Server</div>
        <XIcon className="w-8 h-8 hover:cursor-pointer absolute right-4 top-4"  onClick={() => setShowCreateServer(false)}/>
    </div>
    )
}

export default CreateServerHeader