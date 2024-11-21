import Chip from "../../../components/Chip"
type PostProps = {
    title: string,
    genre?: string[],
    description: string,
    icon?: string,
    open: boolean
}

function Post({title, genre, description, icon, open} : PostProps) {
  return (
    <div className="w-96 rounded-lg border-2 p-2 h-max-92 scrollbar-hidden">
        <div className="flex border-b-4 border-orange-400 pb-1 bg-white rounded-t-full mb-2">
            {icon ? <img width={64} height={64} src={icon} className="rounded-lg aspect-square" /> : 
            <div className="border-4 w-1/6 aspect-square rounded-lg flex justify-center items-center text-[32px]">
                {title.charAt(0)}
            </div>}
            <div className="flex flex-1 px-2 justify-between">
                <div>
                    <div className="font-bold truncate w-52 ">{title}</div>
                    <div className="gap-1">
                        <div>
                            {open ? 
                            <span className="border-2 border-black px-2 bg-green-400">
                                public
                            </span> :
                            <span className="border-2 border-black px-2 bg-red-400">
                                private
                            </span>}
                        </div>
                        <div className="">
                            <span className="border-2 border-r-0 border-black px-1">1</span>
                            <span className="border-2 border-black px-2">member</span>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    {open ? 
                    <div className="hover:cursor-pointer hover:bg-blue-500 py-1 px-2 rounded-md bg-blue-400 text-white">
                        Join
                    </div> 
                    : 
                    <div className="hover:cursor-pointer bg-blue-400 text-white py-1 px-2 rounded-md hover:bg-blue-500">
                        Request
                    </div>}
                </div>
                
            </div>
        </div>
        <div className="mb-2 max-h-32 min-h-30 overflow-scroll">
            {genre?.map((genre, index) => (
                <Chip key={index} label={genre} padding="p-1" shape="rounded-md"/>
            ))}
        </div>
        <div className="overflow-scroll max-h-36 scrollbar-hidden">
            {description}
        </div>
    </div>
  )
}

export default Post