
function Chat() {
  return (
    <div className='flex flex-col h-screen'>
        <div className='p-4 border-b-2'>title</div>
        <div className=' border-green-500 flex-1'>
            <div className="p-4 flex hover:bg-blue-300 "> 
                <div className="border-2 mr-4 min-w-12 aspect-square max-h-12 flex justify-center items-center">P</div>
                <div className="px-1">
                    <div>Guest1</div>
                    <div className="text-[14px]">Hello this is a big project that i would like contribute to</div>
                </div>
            </div>
            <div className="p-4 flex hover:bg-blue-300"> 
                <div className="border-2 mr-4 min-w-12 aspect-square max-h-12 flex justify-center items-center">P</div>
                <div className="px-1">
                    <div>Guest2</div>
                    <div className="text-[14px]">poof</div>
                </div>
            </div>
        </div>
        <div className='h-14'>
            <input className='border-t-4 w-full h-full pl-4 whitespace-nowrap' placeholder='message' />
        </div>
    </div>
  )
}

export default Chat