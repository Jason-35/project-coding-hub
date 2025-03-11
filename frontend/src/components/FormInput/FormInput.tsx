import { Eye, EyeOff } from "lucide-react"
import { useState } from "react"
import { FieldError, Path, RegisterOptions, UseFormRegister } from "react-hook-form"

interface FormInputProps<T extends Record<string, any>> {
    register: UseFormRegister<T>,
    registerName: Path<T>
    lucideIcon: React.ReactNode
    error?: FieldError,
    errorMsg?: string,
    placeholder?: string,
    options?: RegisterOptions<T> | undefined
    password?: boolean
}

function FormInput<T extends Record<string, any>>({error, register, registerName, lucideIcon, errorMsg, placeholder, options, password} : FormInputProps<T>) {
    
    const [showText, setShowText] = useState<boolean>(false)
    const [focus,  setFocus] = useState<boolean>(false)
    const clickShowtext = () => {
        setShowText(!showText)
    }
    return (
    <div>
        <div className={`flex ${error ? "focus-within:border-red-500" : "focus-within:border-orange-400"} border-2 rounded-lg border-transparent`}>
            
            <div className="p-2 flex justify-center items-center bg-black rounded-l-lg">
                {lucideIcon}
            </div>

            {password ? 
                <>
                    <input 
                        {...register(registerName, options )}
                        className="self-center text-lg p-1 pl-3 w-full h-full outline-none border-black focus:border-none border-[1px] border-r-0" 
                        type={showText ? "text" : "password"} 
                        placeholder="Password" 
                        onFocus={() => setFocus(true)}
                        onBlur={() => setFocus(false)}/>
                    <div 
                        className={`p-2 ${focus ? "border-0" : ""} flex justify-center items-center bg-white hover:cursor-pointer border-[1px] border-black border-l-0 rounded-r-lg`}
                        onClick={clickShowtext}>
                        {showText ? <EyeOff color="black" size={20}/> : <Eye color="black" size={20}/>}
                    </div>                
                </> : 
                    <input 
                    {...register(registerName, options )}
                    className="self-center border-black focus:border-none border-[1px] rounded-r-lg text-lg p-1 pl-3 w-full h-full outline-none" 
                    type="text" 
                    placeholder={placeholder} />
            }

            
        </div>
        {error && <div className="text-red-500 text-sm">{errorMsg}</div>}
    </div>
  )
}

export default FormInput