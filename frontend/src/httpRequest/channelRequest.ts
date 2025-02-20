import axios from "axios"
import { getJwtToken } from "../features/auth/util/util";

export const getServerChannels = async(serverId: String) => {
    const token = getJwtToken()
    const config = {
        headers: {
          Authorization: `Bearer ${token}`
        }
    };
    const response = await axios.get(`http://localhost:8080/channel/getAll/${serverId}`, config)
    return response.data
}

export const getChannelMessages = async(channelId: String) => {
    console.log("running joke")
    const token = getJwtToken()
    const config = {
        headers: {
          Authorization: `Bearer ${token}`
        }
    };
    const response = await axios.get(`http://localhost:8080/get/channel/${channelId}/messages`, config)
    return response.data
}