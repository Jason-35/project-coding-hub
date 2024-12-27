import { XIcon } from "lucide-react"
import InboxCard from "./InboxCard"

function Inbox({setShowInbox} : {setShowInbox: React.Dispatch<React.SetStateAction<boolean>>}) {
  return (
    <div className="border-2 border-black w-full h-full rounded-lg p-4 flex flex-col">
        <div className="flex justify-between items-center px-4 mb-4">
            <span className="text-[24px]">Inbox</span>
            <span className="hover:cursor-pointer" onClick={() => setShowInbox(false)}><XIcon /></span>
        </div>
        <div className="overflow-y-scroll flex-1">
            <InboxCard user={"Tom"} project={"Mouse Catching Helper App"} date={"7 November 2024 * 12:35 pm"}/>
            <InboxCard user={"Jerry"} project={"Cat Detector App"} date={"7 November 2024 * 12:35 pm"}/>
        </div>
    </div>
  )
}

export default Inbox