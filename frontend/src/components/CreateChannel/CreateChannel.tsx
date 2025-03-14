import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { useWebSocket } from "../../features/ws/Ws";
import { ChannelFormValue } from "../../types/ChannelTypes";
import ChannelTypeCard from "../ChannelTypeCard/ChannelTypeCard";
import CreateChannelInput from "../CreateChannelInput/CreateChannelInput";
import CreateChannelHeader from "../CreateChannelHeader/CreateChannelHeader";

function CreateChannel({show, setShow}:{show: boolean, setShow: React.Dispatch<React.SetStateAction<boolean>>}) {
    
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
       
        <form className={`${show ? "" : "hidden"} flex bg-white flex-col gap-4 w-1/4 h-3/6 fixed rounded-lg p-8 border-2 border-black left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]`}
                onSubmit={handleSubmit(formSubmit)}>

            <CreateChannelHeader setShow={setShow} />

            <ChannelTypeCard control={control} />

            <CreateChannelInput register={register} errors={errors} />

            <div className="flex h-20 p-4">
                <div className="w-full h-full flex justify-between gap-4">
                    <button className="border-2 border-black flex-0 p-2 rounded-md bg-white" type="button" onClick={() => {setShow(false), reset()}}>Cancel</button>
                    <button className="border-2 border-black flex-0 p-2 rounded-md bg-white">Create Channel</button>
                </div>
            </div>
        </form>
      
  )
}

export default CreateChannel