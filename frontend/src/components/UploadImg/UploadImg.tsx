import { CameraIcon } from "lucide-react"

interface UploadImgProps {
    serverImg: File | undefined,
    setServerImg: React.Dispatch<React.SetStateAction<File | undefined>>
}

function UploadImg({serverImg, setServerImg}:UploadImgProps) {

    const uploadImage = (e: React.ChangeEvent<HTMLInputElement>) => {
        setServerImg(e.target.files?.[0])
    }

    return (
        <div className="relative">
            <div className="flex flex-col bg-white justify-center items-center aspect-square rounded-full w-24 hover:cursor-pointer">
                {serverImg ? <img src={URL.createObjectURL(serverImg)} className=" w-full h-full rounded-full aspect-square object-cover" /> : 
                <div className="border-2 border-black border-dashed w-full h-full aspect-square rounded-full flex flex-col justify-center items-center">
                    <CameraIcon />
                    <span>upload</span>
                </div>}
            </div>
            <input 
                type="file" 
                className="absolute top-0 left-0 bottom-0 right-0 aspect-square rounded-full w-32 bg-transparent hover:cursor-pointer opacity-0" 
                onChange={uploadImage}/>
        </div>
    )
}

export default UploadImg