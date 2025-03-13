import { Link } from "react-router-dom"
import Logo from "../components/Logo/Logo"
import LoginForm from "../components/LoginForm/LoginForm"

function LoginPage() {
    return (
        <div className="w-screen h-screen p-4 flex flex-col font-inter gap-16">
            <Link to={"/"}><Logo /></Link>
            <LoginForm />
        </div>
  )
}

export default LoginPage