import { XIcon } from "lucide-react"
import InboxCard from "./InboxCard"
import { useContext } from "react"
import { InboxContext } from "../../context/InboxContext"

function Inbox() {
    const inboxItem = useContext(InboxContext) 

    return (
        <div className="border-2 border-black w-full h-full rounded-lg p-4 flex flex-col bg-white">
            <div className="flex justify-between items-center px-4 mb-4">
                <span className="text-[24px]">Inbox</span>
                <span className="hover:cursor-pointer" onClick={() => inboxItem.setShowInbox(false)}><XIcon /></span>
            </div>
            
            <div className="overflow-y-scroll flex-1">
                {inboxItem.mails.map((mail, index) => (
                    <InboxCard key={index} mail={mail}/>
                ))}
            </div>
        </div>
  )
}

export default Inbox