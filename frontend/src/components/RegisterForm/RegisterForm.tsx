import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom"

import { Lock, User, Mail } from "lucide-react"

import FormHeader from "../FormHeader/FormHeader"
import FormInput from "../FormInput/FormInput"
import { RegisterFormValue } from "../../types/AuthenticationTypes"
import { registerUser } from "../../httpRequest/authRequest"
function RegisterForm() {

    const { register, handleSubmit, formState: { errors } } = useForm<RegisterFormValue>()
    const navigate = useNavigate()
    
    const formSubmit = async(data: RegisterFormValue) => {
        await registerUser(data)
        navigate("/u/dashboard")
    }
    return (
        <form
            onSubmit={handleSubmit(formSubmit)}
            onError={() => { alert("fail") }}
            className="border-[1px] border-black flex flex-col justify-center bg-zinc-100 gap-4 p-4 h-full rounded-lg sm:w-1/4 sm:self-center sm:h-3/4 sm:px-16">
            
            <FormHeader content={"Register your account"}/>

            <FormInput<RegisterFormValue>
                error={errors.username}
                register={register}
                lucideIcon={<User color="white" size={18} />}
                errorMsg={"Username required"} 
                registerName={"username"}
                placeholder="Username"
                options={{ required: true }}
            />

            <FormInput<RegisterFormValue>
                error={errors.email}
                register={register}
                lucideIcon={<Mail color="white" size={18} />}
                errorMsg={errors.email?.message} 
                registerName={"email"}
                placeholder="Email"
                options={
                    { 
                        required: "Email required",
                        pattern: {
                            value: /\S+@\S+\.\S+/,
                            message: "Not valid email",
                        }
                    }}
            />

            <FormInput<RegisterFormValue>
                error={errors.password}
                register={register}
                lucideIcon={<Lock color="white" size={18} />}
                errorMsg={"Password required"} 
                registerName={"password"}
                placeholder="Password"
                options={{ required: true }}
                password={true}
            />
            
            <button className="border-[1px] self-center w-4/5 p-2 rounded-md border-black bg-white hover:border-orange-400 hover:border-[1px]">
                Register
            </button>

            <div className="self-center font-light">
                Already have an account? <Link to={"/login"} className="hover:underline">Sign In</Link>
            </div>
            
        </form>
  )
}

export default RegisterForm