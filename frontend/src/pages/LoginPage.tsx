import { Form, useForm } from "react-hook-form"

import { Lock, User } from "lucide-react"
import { Link } from "react-router-dom"

import Logo from "../components/Logo"
import Coding from "../assets/coding.svg"

function LoginPage() {
  const { control } = useForm()

  return (
    <div className="w-screen h-screen py-4 px-2 flex flex-col shadow-lg">
      <div className="self-start ml-4">
        <Link to={"/"}><Logo /></Link>
      </div>
      <div className="flex-1 flex justify-center items-center">
          <Form 
            className="flex flex-col bg-zinc-100 h-3/4 rounded-md p-12 gap-6 w-1/3 shadow-2xl"
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
              <span>Sign in to your account</span>
            </div>
            <div className="flex self-center w-4/5 focus-within:border-orange-400 border-4 rounded-md border-transparent">
              <div className="p-2 flex justify-center items-center bg-black">
                <User color="white" size={28}/>
              </div>
              <input 
                className="self-center border-2 text-[16px] p-1 pl-3 w-full h-full border-none outline-none" 
                type="text" 
                placeholder="User name" />
            </div>
            <div className="self-center flex w-4/5 border-4 rounded-md focus-within:border-orange-400 border-transparent">
              <div className="p-2 flex justify-center items-center bg-black">
                <Lock color="white" size={28}/>
              </div>
              <input 
                className="self-center text-[16px] p-1 pl-3 w-full h-full outline-none" 
                type="text" 
                placeholder="Password" />
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
          </Form>
      </div>
    </div>
  )
}

export default LoginPage