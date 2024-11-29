import { PlusIcon, XIcon, CameraIcon } from "lucide-react"
import { useRef, useState } from "react"
import Chip from "../../../components/Chip"

function CreateServer({setShowCreateServer} : {setShowCreateServer:React.Dispatch<React.SetStateAction<boolean>>}) {
    const [tags, setTags] = useState<string[]>([])
    const [statPrivate, setStatPrivate] = useState<boolean>(false)

    const inputRef = useRef<HTMLInputElement>(null)

    const handleInput = (e: React.KeyboardEvent) => {
    let event = (e.target as HTMLInputElement)
        if (e.key === 'Enter') {
            if(tags.length <= 20) {
                setTags([...tags, event.value])
            }
            if(inputRef.current) {
                inputRef.current.value = ""
            }
        }  
    }

    const handleCheckChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value, "change")
        setStatPrivate(!statPrivate)
    }

    const handleChip = (tag: string) => {
        console.log(tag)
    }

  return (
    <div className='fixed z-30 w-screen h-screen top-0 left-0 flex justify-center items-center bg-black/40'>
        <div className="z-40 w-2/5 p-4 h-fit border-4 bg-yellow-400 opacity-100 flex flex-col justify-center items-center gap-4">
            <div className="flex justify-between border-4 w-full">
                <div className="text-[24px]">Customize your server</div>
                <div className="hover:cursor-pointer" onClick={() => setShowCreateServer(false)}>
                    <XIcon/>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center aspect-square rounded-full border-4 w-32">
                <CameraIcon />
                <span>upload</span>
            </div>
            <div className="border-4 w-4/5 flex items-center gap-2">
                <label>
                    <input type="checkbox" checked={statPrivate} onChange={handleCheckChange} className="sr-only peer"/>
                    <div className="relative w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-green-400 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-red-400"></div>
                </label>
                {statPrivate ?  <span>Private</span> : <span>Public</span>}
            </div>
            <div className="border-4 w-4/5">
                <input type="text" placeholder="server's name" className="w-full" />
            </div>
            <div className="border-4 w-4/5">
                <textarea className="text-black w-full resize-none" placeholder="description" cols={30} rows={5} />
            </div>
            <div className="border-4 w-4/5 flex flex-col gap-2">
                <div>Tags</div>
                <div className="flex flex-wrap border-4">
                    {tags && tags.map((tag, index) => (
                        <div key={index} onClick={() => handleChip(tag)}>
                            <Chip label={tag} padding="p-1"/>
                        </div>
                    ))}
                </div>
                <div>
                    <input ref={inputRef} type="text" placeholder="Add a tag" onKeyDown={handleInput} />
                </div>
                <div>
                    20 max tags
                </div>
            </div>
        </div>
    </div>
  )
}

export default CreateServer