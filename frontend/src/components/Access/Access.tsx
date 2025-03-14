import { UseFormRegister } from "react-hook-form"
import { ServerFormValue } from "../../types/ServerTypes"
import { useState } from "react"

interface AccessProps {
    register: UseFormRegister<ServerFormValue>
}

function Access({register}: AccessProps) {

    const [statPrivate, setStatPrivate] = useState<boolean>(false)
    const handleCheckChange = () => {
        setStatPrivate(!statPrivate)
    }

    return (
        <div className="w-4/5 flex items-center gap-2">
            <label>
                <input
                    {...register("serverStatus")} 
                    type="checkbox" 
                    checked={statPrivate} 
                    onChange={handleCheckChange} 
                    className="sr-only peer"/>
                <div className="hover:cursor-pointer relative w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-green-400 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-red-400"></div>
            </label>
            {statPrivate ?  <span>Private</span> : <span>Public</span>}
        </div>
    )
}

export default Access