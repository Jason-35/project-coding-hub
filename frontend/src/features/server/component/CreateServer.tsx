import { XIcon, CameraIcon } from "lucide-react"
import { useRef, useState } from "react"
import Chip from "../../../components/Chip"
import { removeValue } from "../util/Util"

function CreateServer({setShowCreateServer} : {setShowCreateServer:React.Dispatch<React.SetStateAction<boolean>>}) {
    const [tags, setTags] = useState<string[]>([])
    const [statPrivate, setStatPrivate] = useState<boolean>(false)
    const [serverImg, setServerImg] = useState<File | undefined>()

    const inputRef = useRef<HTMLInputElement>(null)

    const handleInput = (e: React.KeyboardEvent) => {
    let event = (e.target as HTMLInputElement)
        if (e.key === 'Enter') {
            if(tags.length <= 20 && !tags.includes(event.value)) {
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

    const removeChip = (tag: string) => {
        setTags(removeValue(tags, tag))
    }

    const uploadImage = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log("uploading image!", typeof(e.target.files?.[0]))
        setServerImg(e.target.files?.[0])
    }

  return (
    <div className='fixed z-30 w-screen h-screen top-0 left-0 flex justify-center items-center bg-black/40'>
        <div className="relative z-40 w-2/6 p-4 h-fit bg-yellow-400 rounded-md opacity-100 flex flex-col justify-center items-center gap-4">
            <div className="absolute top-0 right-0 -translate-x-2 translate-y-2  hover:cursor-pointer" onClick={() => setShowCreateServer(false)}>
                <XIcon/>
            </div>
            <div className="text-[24px]">Create your server</div>
            <div className="relative">
                <div className="flex flex-col bg-white justify-center items-center aspect-square rounded-full border-2 w-32 hover:cursor-pointer">
                    {serverImg ? <img src={URL.createObjectURL(serverImg)} className="w-full h-full rounded-full aspect-square object-cover" /> : 
                    <div className="border-4 w-full h-full aspect-square rounded-full flex flex-col justify-center items-center">
                        <CameraIcon />
                        <span>upload</span>
                    </div>}
                </div>
                <input 
                    type="file" 
                    className="absolute top-0 left-0 bottom-0 right-0 border-4 aspect-square rounded-full w-32 bg-transparent hover:cursor-pointer opacity-0" 
                    onChange={uploadImage}/>
            </div>
            <div className="w-4/5 flex items-center gap-2">
                <label>
                    <input 
                        type="checkbox" 
                        checked={statPrivate} 
                        onChange={handleCheckChange} 
                        className="sr-only peer"/>
                    <div className="relative w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-green-400 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-red-400"></div>
                </label>
                {statPrivate ?  <span>Private</span> : <span>Public</span>}
            </div>
            <div className="w-4/5">
                <input 
                    type="text" 
                    placeholder="server's name" 
                    className="w-full p-2 rounded-sm text-[18px] mb-2" />
                <div className="text-red-500">Required field</div>
            </div>
            <div className="w-4/5">
                <textarea 
                    className="text-black w-full resize-none text-[18px] p-2" 
                    placeholder="description" 
                    cols={30} 
                    rows={5} />
            </div>
            <div className="w-4/5 flex flex-col gap-2">
                <div className="text-[20px]">Tags</div>
                <div className="flex flex-wrap max-h-52 overflow-scroll scrollbar-hidden">
                    {tags && tags.map((tag, index) => (
                        <div key={index} onClick={() => removeChip(tag)}>
                            <Chip label={tag} padding="p-1"/>
                        </div>
                    ))}
                </div>
                <div>
                    <input ref={inputRef} 
                        type="text" 
                        placeholder="Add a tag" 
                        onKeyDown={handleInput}
                        maxLength={20}
                        className="w-full p-2 rounded-sm" />
                </div>
                <div className="italic text-[12px]">
                    20 max tags
                </div>
            </div>
            <button className="bg-white w-4/5 p-1 rounded-md">Create</button>
        </div>
    </div>
  )
}

export default CreateServer