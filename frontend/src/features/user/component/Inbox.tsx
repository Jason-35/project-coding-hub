function Inbox() {
  return (
    <div className="border-2 border-black w-full h-full">
        <div>
            <span>Notification</span>
            <span>X</span>
        </div>
        <div>
            <div className="border-2 border-green-400 flex p-2 gap-2 items-center">
                <div className="border-2 border-black rounded-lg aspect-square w-14 h-14 flex justify-center items-center">A</div>
                <div className="flex flex-col gap-2  flex-1">
                    <div className="">
                        asmon invites you to the super duper project
                    </div>
                    <div className="flex justify-end gap-2">
                        <button className="border-2 border-green-200 p-1 rounded-md hover:cursor-pointer text-sm hover:bg-green-400">Accept</button>
                        <button className="border-2 border-red-200 p-1 rounded-md hover:cursor-pointer text-sm hover:bg-red-400">Decline</button>
                    </div>
                </div>
                <div>
                    2hrs
                </div>
            </div>

            

        </div>
    </div>
  )
}

export default Inbox