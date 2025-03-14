import { UseFormRegister, FieldErrors } from "react-hook-form"
import { ServerFormValue } from "../../types/ServerTypes"

interface CreateServerNameInputProps {
    register: UseFormRegister<ServerFormValue>
    errors: FieldErrors<ServerFormValue>
}

function CreateServerNameInput({register, errors}: CreateServerNameInputProps) {
    return (
        <div className="w-4/5">
            <label htmlFor="">Server Name</label>
            <input 
                {...register("serverName", { required: true})}
                type="text" 
                className="border-[1px] border-black outline-none w-full p-2 rounded-sm text-[18px] mb-2" />
            {errors.serverName && <div className="text-red-500 italic">*Required field</div>}
        </div>
    )
}

export default CreateServerNameInput