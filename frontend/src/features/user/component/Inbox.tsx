import { XIcon } from "lucide-react"
import InboxCard from "./InboxCard"

type InboxCardType = {
    sender: string,
    project: string,
    date: string
}

function Inbox({setShowInbox, mails} : {setShowInbox: React.Dispatch<React.SetStateAction<boolean>>, mails: InboxCardType[]}) {
    return (
    <div className="border-2 border-black w-full h-full rounded-lg p-4 flex flex-col">
        <div className="flex justify-between items-center px-4 mb-4">
            <span className="text-[24px]">Inbox</span>
            <span className="hover:cursor-pointer" onClick={() => setShowInbox(false)}><XIcon /></span>
        </div>
        <div className="overflow-y-scroll flex-1">
            {mails.map((mail, index) => (
                <InboxCard key={index} sender={mail.sender} project={mail.project} date={mail.date}/>
            ))}
        </div>
    </div>
  )
}

export default Inbox