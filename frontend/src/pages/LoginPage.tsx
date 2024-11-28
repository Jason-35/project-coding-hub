import { useForm } from "react-hook-form"

import { Lock, User, Eye, EyeOff } from "lucide-react"
import { Link, useNavigate } from "react-router-dom"

import Logo from "../components/Logo"
import Coding from "../assets/coding.svg"
import { useState } from "react"
import axios from "axios"

function LoginPage() {
    type FormValue = {
        username: string,
        password: string
    }

    const navigate = useNavigate()

    const { register, handleSubmit, formState: { errors } } = useForm<FormValue>();

    const [ loginError, setLoginError ] = useState<number>(200); 
    const [showText, setShowText] = useState<boolean>(false);

    const clickShowtext = () => {
        setShowText(!showText)
    }

    const formSubmit = (data: FormValue) => {
        console.log("Submit form", data)
        axios.post("http://localhost:8080/auth/login", data).then((res) => {
            localStorage.setItem("userInfo", JSON.stringify(res.data.userInfo))
            localStorage.setItem("tokenInfo", JSON.stringify(res.data.tokenInfo))
            navigate("/dashboard")
        }).catch((error) => {
            setLoginError(error.response.status)
            console.log(error.response.status)
        })
    }

    return (
    <div className="w-screen h-screen py-4 px-2 flex flex-col">
        <div className="self-start ml-4">
            <Link to={"/"}><Logo /></Link>
        </div>
        <div className="flex-1 flex justify-center items-center">
            <form 
                className="flex flex-col bg-zinc-100 h-3/4 rounded-md p-12 gap-5 w-1/4 shadow-2xl"
                onSubmit={handleSubmit(formSubmit)}>
                <div className="bg-orange-400 w-2/5 rounded-full aspect-square flex self-center">
                    <img src={Coding} alt="" />
                </div>
                <div className="self-center gap-4">
                    <span>Sign in to your account</span>
                    { loginError !== 200 && <div className="text-red-500 text-center p-0 m-0">Fail to login</div> }
                </div>

                
                <div className="flex flex-col self-center w-4/5">
                    <div className={`flex ${errors.username ? "focus-within:border-red-500" : "focus-within:border-orange-400"} border-4 rounded-md border-transparent`}>
                        <div className="p-2 flex justify-center items-center bg-black">
                            <User color="white" size={28}/>
                        </div>
                        <input 
                            {...register("username", { required: true })}
                            className="self-center border-2 text-[16px] p-1 pl-3 w-full h-full border-none outline-none" 
                            type="text" 
                            placeholder="Username" />
                    </div>
                   {errors.username && <div className="text-red-500">Username required</div>}
                </div>
                <div className="self-center flex flex-col w-4/5">
                    <div className={`flex ${errors.password ? "focus-within:border-red-500" : "focus-within:border-orange-400"} border-4 rounded-md border-transparent`}>
                        <div className="p-2 flex justify-center items-center bg-black">
                            <Lock color="white" size={28}/>
                        </div>
                        <input 
                            {...register("password", { required: true})}
                            className="self-center text-[16px] p-1 pl-3 w-full h-full outline-none" 
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
                <div className="self-center text-sm flex w-4/5 justify-between">
                    <div className="flex w-2/4 gap-2">
                        <input
                        className="w-[24px]"
                        type="checkbox" />
                        <span className="[word-spacing:-0.25em]  white">Remember me</span>
                    </div>
                    <div className="self-center">
                        <span className="[word-spacing:-0.25em] hover:underline hover:cursor-pointer">Forgot Password?</span>
                    </div>
                </div>
                <button className="border-2 self-center w-4/5 p-2 rounded-md border-black hover:bg-orange-400 hover:text-white hover:border-orange-500">
                Sign In
                </button>
                <div className="self-center">
                Not a member? <Link to={"/signup"} className="hover:underline">Create new account</Link>
                </div>
            </form>
        </div>
    </div>
  )
}

export default LoginPage