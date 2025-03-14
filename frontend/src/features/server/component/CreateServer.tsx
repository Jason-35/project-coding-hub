import { XIcon, CameraIcon } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { ServerFormValue } from "../../../types/ServerTypes"
import { createServer } from "../../../httpRequest/ServerRequest"
import CreateServerHeader from "../../../components/CreateServerHeader/CreateServerHeader"
import UploadImg from "../../../components/UploadImg/UploadImg"
import Access from "../../../components/Access/Access"
import CreateServerNameInput from "../../../components/CreateServerNameInput/CreateServerNameInput"
import CreateServerDescriptionInput from "../../../components/CreateServerDescriptionInput/CreateServerDescriptionInput"
import TagInput from "../../../components/TagInput/TagInput"

function CreateServer({setShowCreateServer} : {setShowCreateServer:React.Dispatch<React.SetStateAction<boolean>>}) {

    const { register, handleSubmit, formState: { errors } } = useForm<ServerFormValue>();
    const [tags, setTags] = useState<string[]>([])
    const navigate = useNavigate()
    
    const [serverImg, setServerImg] = useState<File | undefined>()
    const [base64img, setBase64Img] = useState<string>("")
    useEffect(() => {
        if(serverImg) {
            const reader = new FileReader();
            reader.readAsDataURL(serverImg);
            reader.onload = () => {
                const base64Data = reader.result as string;
                setBase64Img(base64Data);
            }
        }
    }, [serverImg])


    const formSubmit = async(data: ServerFormValue) => {
        setShowCreateServer(false)
        const res = await createServer(data, tags, base64img)
        window.location.reload()
        navigate(`/u/${res.data}`)
    }

    const preventEnterSubmit = (event: React.KeyboardEvent<HTMLFormElement>) => {
        if (event.key === 'Enter') {
          event.preventDefault();
        }
      };

  return (
        <div className='font-inter fixed z-30 w-screen h-screen top-0 left-0 flex justify-center items-center bg-black/40'>
            <form 
                className="relative z-40 w-3/12 p-12 h-fit bg-white rounded-md opacity-100 flex flex-col justify-center items-center gap-4"
                onSubmit={handleSubmit(formSubmit)}
                onKeyDown={preventEnterSubmit}>
                
                <CreateServerHeader setShowCreateServer={setShowCreateServer}/>

                <UploadImg serverImg={serverImg} setServerImg={setServerImg} />

                <Access register={register} />
    
                <CreateServerNameInput register={register} errors={errors} />

                <CreateServerDescriptionInput register={register} />

                <TagInput tags={tags} setTags={setTags} />

                <button className="border-[1px] border-black bg-white w-4/5 p-1 rounded-md">Create</button>
            </form>
        </div>
    )
}

export default CreateServer