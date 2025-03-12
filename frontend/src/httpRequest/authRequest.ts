import axios from "axios";
import { LoginFormValue, RegisterFormValue } from "../types/AuthenticationTypes";

export const registerUser = async(data: RegisterFormValue) => {
    const res = await axios.post("http://localhost:8080/auth/signup", data)
    localStorage.setItem("userInfo", JSON.stringify(res.data.userInfo))
    localStorage.setItem("tokenInfo", JSON.stringify(res.data.tokenInfo))
}

export const loginUser = async(data: LoginFormValue) => {
    const res = await axios.post("http://localhost:8080/auth/login", data)
    localStorage.setItem("userInfo", JSON.stringify(res.data.userInfo))
    localStorage.setItem("tokenInfo", JSON.stringify(res.data.tokenInfo))
}