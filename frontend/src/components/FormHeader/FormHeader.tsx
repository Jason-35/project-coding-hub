import Coding from "../../assets/coding.svg"

interface FormHeaderProps {
    content: string
}

function FormHeader({content} : FormHeaderProps) {
  return (
    <div className="flex flex-col gap-6">
        <div className="bg-orange-400 w-2/5 rounded-full aspect-square flex self-center sm:w-2/4">
            <img src={Coding} alt="" />
        </div>
        <div className="self-center text-2xl font">
            <span>{content}</span>
        </div>
    </div>
    
  )
}

export default FormHeader