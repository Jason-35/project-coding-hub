import axios from "axios"
import { getJwtToken, getUserInfo } from "../features/auth/util/util";
import { ServerFormValue } from "../types/ServerTypes";

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

export const createServer = async(data: ServerFormValue, tags: string[], base64img: string) => {
    let userInfo = getUserInfo()
        const token = getJwtToken()
        const config = {
            headers: {
              Authorization: `Bearer ${token}`
            }
        };
        
        data.serverTags = tags
        if (base64img !== "") {
            data.serverImg = base64img;
        } else {
            data.serverImg = ""
        }

        const res = await axios.post("http://localhost:8080/user/server/create", 
        {
            "userInfo" : userInfo,
            "serverData" : data
        },
        config)
        
        return res
}

