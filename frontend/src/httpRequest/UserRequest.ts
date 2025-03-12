import axios from "axios";
import { getJwtToken, getUserInfo } from "../features/auth/util/util";

export const getUserServer = async() => {
    const token = getJwtToken()
    const userId = getUserInfo()?.id
    const config = {
    headers: {
          Authorization: `Bearer ${token}`
        }
    };
    const res = await axios.get(`http://localhost:8080/server/get/${userId}`, config)

    return res
}

export const getUserMail = async() => {
    const token = getJwtToken()
    const userId = getUserInfo()?.id
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };

    const res = await axios.get(`http://localhost:8080/get/${userId}/mail`, config)
    return res
}