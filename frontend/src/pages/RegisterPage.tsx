import { Link } from "react-router-dom"

import Logo from "../components/Logo/Logo"

import RegisterForm from "../components/RegisterForm/RegisterForm"

function RegisterPage() {
    return (
        <div className="w-screen h-screen p-4 flex flex-col font-inter gap-16">
            <Link to={"/"}><Logo /></Link>
            <RegisterForm />
        </div>
  )
}

export default RegisterPage