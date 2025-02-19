import axios from "axios";
import { X } from "lucide-react"
import { Controller, useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { getJwtToken } from "../../auth/util/util";
import { useWebSocket } from "../../ws/Ws";

function CreateChannel({show, setShow}:{show: boolean, setShow: React.Dispatch<React.SetStateAction<boolean>>}) {
    type ChannelFormValue = {
        channelType: string,
        channelName: string,
        serverId: string
    }

    const {serverId} = useParams()
    const webSocketClient = useWebSocket()
    

    const { register, handleSubmit, reset, formState: { errors }, control } = useForm<ChannelFormValue>({
        defaultValues: {
            channelType: "text",
            channelName: "",
            serverId: serverId
        }
    });

    const formSubmit = (data: ChannelFormValue) => {
        const token = getJwtToken()
        const config = {
            headers: {
              Authorization: `Bearer ${token}`
            }
        };
        // redundant and need to keep only one!
        // axios.post("http://localhost:8080/channel/create", 
        // {
        //     "channelName" : data.channelName,
        //     "channelType" : data.channelType,
        //     "serverId": data.serverId
        // },
        // config)

        let body = {
            "channelName" : data.channelName,
            "channelType" : data.channelType,
            "serverId": data.serverId
        }

        if (webSocketClient) {
            console.log("sending!")
            webSocketClient.send(`/app/create/channel/${serverId}`, {}, JSON.stringify(body))
            setShow(false)
        }

        reset()
        

    }

    return (
        <>
        {show ? <form className="flex flex-col gap-4 w-1/4 h-2/5 fixed rounded-lg p-2 border-2 border-black left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]"
                onSubmit={handleSubmit(formSubmit)}>
                    <div className="text-[24px] flex justify-between items-center">
                        <span>Create Channel</span>
                        <span onClick={() => setShow(false)}><X/></span>
                    </div>
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
                    <div className="">
                        <input {...register("channelName", { required: true })} type="text" placeholder="channel name" className="border-2 border-black w-full h-[48px] rounded-md pl-2"/>
                    </div>
                    <div className="flex h-1/4 p-4">
                        <div className="w-full h-full flex justify-between gap-4">
                            <button className="border-2 border-black flex-0 p-2 rounded-md bg-white" type="button" onClick={() => setShow(false)}>Cancel</button>
                            <button className="border-2 border-black flex-0 p-2 rounded-md bg-white">Create Channel</button>
                        </div>
                    </div>
                </form> : 
        <></>}
        </>
  )
}

export default CreateChannel