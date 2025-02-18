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