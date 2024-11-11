import { Form, useForm } from "react-hook-form"
import { Link } from "react-router-dom"

import { Lock, User, Mail } from "lucide-react"
import Coding from "../assets/coding.svg"
import Logo from "../components/Logo"

function RegisterPage() {
  const { register, control, formState: { errors } } = useForm()

  return (
    <div className="w-screen h-screen py-4 px-2 flex flex-col">
      <div className="self-start ml-4">
        <Link to={"/"}><Logo /></Link>
      </div>
      <div className="flex-1 flex justify-center items-center">
          <Form 
            className="flex flex-col bg-zinc-100 rounded-md p-12 gap-6 w-1/3 shadow-2xl"
            action="/"
            control={control}
            onSuccess={() => {
              alert("success")
            }}
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
                    type="text" 
                    placeholder="Password" />
              </div>
              {errors.password && <div className="text-red-500">Password required</div>}
            </div>
            
            <button className="border-2 self-center w-4/5 p-2 rounded-md border-black hover:bg-orange-400 hover:text-white hover:border-orange-500">
              Register
            </button>
            <div className="self-center">
              Already have an account? <Link to={"/signup"} className="hover:underline">Sign In</Link>
            </div>
          </Form>
      </div>
    </div>
  )
}

export default RegisterPage