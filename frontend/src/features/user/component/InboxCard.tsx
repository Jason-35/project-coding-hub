type InboxCardType = {
    user: string,
    project: string,
    date: string
}

function InboxCard({user, project, date} : InboxCardType) {
  return (
    <div>
        <div className="flex p-2 gap-2 items-center">
            <div className="self-start">
                <div className="border-2 border-black rounded-lg aspect-square w-14 h-14 flex justify-center items-center">
                    A
                </div>
            </div>
            <div className="flex flex-col gap-2 flex-1">
                <div>
                    {user} invites you to the {project} project
                </div>
                <div className="italic text-[12px]">
                    {date}
                </div>
                <div className="flex justify-start gap-2">
                    <button className="border-2 border-green-200 p-1 rounded-md hover:cursor-pointer text-sm hover:bg-green-400">Accept</button>
                    <button className="border-2 border-red-200 p-1 rounded-md hover:cursor-pointer text-sm hover:bg-red-400">Decline</button>
                </div>
            </div>
        </div>
    </div> 
  )
}

export default InboxCard