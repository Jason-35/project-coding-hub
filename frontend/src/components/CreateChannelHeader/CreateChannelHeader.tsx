import { X } from "lucide-react"

function CreateChannelHeader({setShow} : {setShow: React.Dispatch<React.SetStateAction<boolean>>}) {
  return (
    <div className="text-3xl flex justify-between items-center mb-6">
        <span>Create Channel</span>
        <span className="hover:cursor-pointer" 
            onClick={() => setShow(false)}>
            <X/>
        </span>
    </div>
  )
}

export default CreateChannelHeader