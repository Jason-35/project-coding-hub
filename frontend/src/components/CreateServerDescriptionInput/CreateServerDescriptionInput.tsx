import { UseFormRegister } from "react-hook-form"
import { ServerFormValue } from "../../types/ServerTypes"

interface CreateServerDescriptionInput {
    register: UseFormRegister<ServerFormValue>
}

function CreateServerDescriptionInput({register}: CreateServerDescriptionInput) {
    return (
        <div className="w-4/5">
            <label>Description</label>
            <textarea 
                {...register("serverDescription")}
                className="border-[1px] border-black outline-none text-black w-full resize-none text-[18px] p-2 rounded-sm whites" 
                cols={30} 
                rows={5} />
        </div>
    )
}

export default CreateServerDescriptionInput