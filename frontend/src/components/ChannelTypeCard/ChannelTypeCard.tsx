import { Control, Controller } from "react-hook-form"
import { ChannelFormValue } from "../../types/ChannelTypes"

function ChannelTypeCard({control} : {control :Control<ChannelFormValue, any>}) {
    return (
        <Controller 
            control={control}
            name={"channelType"}
            render={({field: {onChange, value}}) => (
                <>
                    <div className="flex flex-col gap-4">
                        <div className="border-2 border-black h-14 flex items-center justify-between px-2 rounded-md">
                            <label htmlFor="">Text</label>
                            <input  
                                type="radio" 
                                name="channel" 
                                value="text"
                                checked={value == "text"}
                                onChange={() => onChange("text")}/>
                    </div>
                    <div className="border-2 border-black h-14 flex items-center justify-between px-2 rounded-md">
                        <label htmlFor="">Task</label>
                        <input  
                            type="radio" 
                            name="channel" 
                            value="task"
                            checked={value == "task"}
                            onChange={() => onChange("task")}/>
                        </div>
                    </div>
                </>
            )}
            />
    )
}

export default ChannelTypeCard