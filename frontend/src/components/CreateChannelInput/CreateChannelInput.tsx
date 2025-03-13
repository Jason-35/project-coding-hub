import { FieldErrors, UseFormRegister } from "react-hook-form"
import { ChannelFormValue } from "../../types/ChannelTypes"

interface CreateChannelInputProps {
    register: UseFormRegister<ChannelFormValue>,
    errors: FieldErrors<ChannelFormValue>
}

function CreateChannelInput({register, errors} : CreateChannelInputProps) {
  return (
    <>
        <input {...register("channelName", { required: true })} type="text" placeholder="channel name" className="p-2 outline-none border-2 border-black w-full h-[48px] rounded-md pl-2"/>
        <div>
            {errors.channelName ? <div className="text-red-400">*Channel Name Required</div> : <div className="text-transparent">a</div>}
        </div>
    </>
  )
}

export default CreateChannelInput