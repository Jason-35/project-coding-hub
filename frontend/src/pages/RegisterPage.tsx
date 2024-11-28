import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom"

import { Lock, User, Mail, Eye, EyeOff } from "lucide-react"
import Coding from "../assets/coding.svg"
import Logo from "../components/Logo"
import { useState } from "react"
import axios from "axios"

function RegisterPage() {
    type FormValue = {
        username: string,
        password: string,
        email: string
    }
    const { register, handleSubmit, formState: { errors } } = useForm<FormValue>()
    const [showText, setShowText] = useState<boolean>(true)
    const navigate = useNavigate()

    const clickShowtext = () => {
        setShowText(!showText)
    }

    const formSubmit = (data: FormValue) => {
        console.log("Submit form", data)
        axios.post("http://localhost:8080/auth/signup", data).then((res) => {
            localStorage.setItem("userInfo", JSON.stringify(res.data.userInfo))
            localStorage.setItem("tokenInfo", JSON.stringify(res.data.tokenInfo))
            navigate("/dashboard")
        })
    }

    return (
    <div className="w-screen h-screen py-4 px-2 flex flex-col">
        <div className="self-start ml-4">
            <Link to={"/"}><Logo /></Link>
        </div>
        <div className="flex-1 flex justify-center items-center">
            <form 
                className="flex flex-col bg-zinc-100 rounded-md p-12 gap-6 w-1/4 shadow-2xl"
                onSubmit={handleSubmit(formSubmit)}
                onError={() => {
                alert("fail")
                }}>
                <div className="bg-orange-400 w-2/5 rounded-full aspect-square flex self-center">
                    <img src={Coding} alt="" />
                </div>
                <div className="self-center">
                    <span>Register your account</span>
                </div>
                <div className="flex flex-col self-center w-4/5">
                    <div className={`flex ${errors.username ? "focus-within:border-red-500" : "focus-within:border-orange-400"} border-4 rounded-md border-transparent`}>
                        <div className="p-2 flex justify-center items-center bg-black">
                            <User color="white" size={18}/>
                        </div>
                        <input 
                        {...register("username", { required: true} )}
                        className="self-center border-2 text-[18px] p-1 pl-3 w-full h-full border-none outline-none" 
                        type="text" 
                        placeholder="Username" />
                    </div>
                    {errors.username && <div className="text-red-500">Username required</div>}
                </div>
                <div className="flex flex-col self-center w-4/5">
                    <div className={`flex ${errors.email ? "focus-within:border-red-500" : "focus-within:border-orange-400"} border-4 rounded-md border-transparent`}>
                        <div className="p-2 flex justify-center items-center bg-black">
                            <Mail color="white" size={18}/>
                        </div>
                        <input 
                            {...register("email", { 
                                required: true,
                                pattern: {
                                value: /\S+@\S+\.\S+/,
                                message: "Not valid email",
                            }} )}
                            className="self-center text-[18px] p-1 pl-3 w-full h-full outline-none" 
                            type="email" 
                            placeholder="Email" />
                    </div>
                    {errors.email && <div className="text-red-500">{errors.email.message?.toString()}</div>}
                </div>
                <div className="self-center flex flex-col w-4/5">
                    <div className={`flex ${errors.password ? "focus-within:border-red-500" : "focus-within:border-orange-400"} border-4 rounded-md border-transparent`}>
                        <div className="p-2 flex justify-center items-center bg-black">
                            <Lock color="white" size={18}/>
                        </div>
                        <input 
                            {...register("password", { required: true} )}
                            className="self-center text-[18px] p-1 pl-3 w-full h-full outline-none" 
                            type={showText ? "text" : "password"} 
                            placeholder="Password" />
                        <div 
                            className="p-2 flex justify-center items-center bg-white hover:cursor-pointer"
                            onClick={clickShowtext}>
                            {showText ? <EyeOff color="black" size={20}/> : <Eye color="black" size={20}/>}
                        </div>
                    </div>
                    {errors.password && <div className="text-red-500">Password required</div>}
                </div>
                
                <button className="border-2 self-center w-4/5 p-2 rounded-md border-black hover:bg-orange-400 hover:text-white hover:border-orange-500">
                    Register
                </button>
                <div className="self-center">
                    Already have an account? <Link to={"/login"} className="hover:underline">Sign In</Link>
                </div>
            </form>
        </div>
    </div>
  )
}

export default RegisterPage