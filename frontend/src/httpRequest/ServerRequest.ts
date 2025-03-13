import axios from "axios"
import { getJwtToken } from "../features/auth/util/util";

export const getServerName = async(serverId: String) => {
    const token = getJwtToken()
    const config = {
        headers: {
          Authorization: `Bearer ${token}`
        }
    };

    const response = await axios.get(`http://localhost:8080/server/get/${serverId}/name`, config)
    return response.data
}

export const getServerMembers = async(serverId: String) => {
    const token = getJwtToken()
        const config = {
            headers: {
            Authorization: `Bearer ${token}`
            }
        };
        const response = await axios.get(`http://localhost:8080/server/get/${serverId}/members`, config)
        return response.data
}

export const getAllServers = async() => {
    const token = getJwtToken()
        const config = {
            headers: {
              Authorization: `Bearer ${token}`
            }
        };
        const res = await axios.get("http://localhost:8080/server/get/all", config)

        return res
}

