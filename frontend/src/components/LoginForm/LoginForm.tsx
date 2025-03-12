import { User, Lock } from "lucide-react"
import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom"
import FormInput from "../FormInput/FormInput"
import FormHeader from "../FormHeader/FormHeader"
import axios from "axios"
import { LoginFormValue } from "../../types/AuthenticationTypes"

function LoginForm() {
    
    const { register, handleSubmit, formState: { errors } } = useForm<LoginFormValue>()
    const navigate = useNavigate()

    const formSubmit = (data: LoginFormValue) => {
        console.log("Submit form", data)
        axios.post("http://localhost:8080/auth/login", data).then((res) => {
            localStorage.setItem("userInfo", JSON.stringify(res.data.userInfo))
            localStorage.setItem("tokenInfo", JSON.stringify(res.data.tokenInfo))
            navigate("/u/dashboard")
        })
    }

    return (
        <form
            onSubmit={handleSubmit(formSubmit)}
            onError={() => { alert("fail") }}
            className="border-[1px] border-black flex flex-col justify-center bg-zinc-100 gap-4 p-4 h-full rounded-lg sm:w-1/4 sm:self-center sm:h-3/4 sm:px-16">
            
            <FormHeader content={"Sign in to your account"}/>

            <FormInput<LoginFormValue>
                error={errors.username}
                register={register}
                lucideIcon={<User color="white" size={18} />}
                errorMsg={"Username required"} 
                registerName={"username"}
                placeholder="Username"
                options={{ required: true }}
            />

            <FormInput<LoginFormValue>
                error={errors.password}
                register={register}
                lucideIcon={<Lock color="white" size={18} />}
                errorMsg={"Password required"} 
                registerName={"password"}
                placeholder="Password"
                options={{ required: true }}
                password={true}
            />

            <button className="border-[1px] self-center w-4/5 p-2 rounded-md border-black bg-white  hover:border-orange-500">
                    Sign In
            </button>
            <div className="self-center">
                Not a member? <Link to={"/signup"} className="hover:underline">Create new account</Link>
            </div>

        </form>
    )
}

export default LoginForm