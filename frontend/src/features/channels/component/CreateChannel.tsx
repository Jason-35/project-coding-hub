import { X } from "lucide-react"
function CreateChannel() {
  return (
    <div className="flex flex-col gap-4 w-1/4 h-2/5 absolute rounded-lg p-2 border-2 border-black left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]">
            <div className="text-[24px] flex justify-between items-center">
                <span>Create Channel</span>
                <span><X/></span>
            </div>
            <div className="flex flex-col gap-4">
                <div className="border-2 border-black h-16 flex items-center justify-between px-2 rounded-md">
                    <label htmlFor="">Text</label>
                    <input type="radio" name="channel" value={"Text"}/>
                </div>
                <div className="border-2 border-black h-16 flex items-center justify-between px-2 rounded-md">
                    <label htmlFor="">Task</label>
                    <input type="radio" name="channel" value={"Task"}/>
                </div>
            </div>
            <div className="">
                <input type="text" placeholder="channel name" className="border-2 border-black w-full h-[48px] rounded-md pl-2"/>
            </div>
            <div className="flex flex-1  p-4">
                <div className="w-full h-full flex justify-between gap-4">
                    <button className="border-2 border-black flex-0 p-2 rounded-md bg-white">Cancel</button>
                    <button className="border-2 border-black flex-0 p-2 rounded-md bg-white">Create Channel</button>
                </div>
            </div>
    </div>
  )
}

export default CreateChannel